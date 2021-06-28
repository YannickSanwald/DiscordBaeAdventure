// imports
const fs = require('fs'); // Extension fürs Discord-eigene File System
const dotenv = require('dotenv'); // Extension um .env's zu handlen
const Discord = require('discord.js'); // Standard Discord Bot Commands
const config = require('./config.json'); // .json mit Config Optionen wie dem verwendeten Prefix

const gameProgress = require('./gameLogic/GameStoryProgress.js');
const gameUsers = require('./gameLogic/GameUsers.js');
const roleClaims = require('./gameLogic/RoleClaim.js');
const gameChannels = require('./gameLogic/GameChannels.js');
const gameItems = require('./gameLogic/GameItem.js');
const gameInventory = require('./gameLogic/GameInventory.js');

// Initializierung für die Datenbank
const { Users, ItemList } = require('./dbObjects');
const { Op } = require('sequelize');

// exports
const currency = new Discord.Collection();
module.exports = { currency } // Modul exportiert currency an commands

Reflect.defineProperty(currency, 'add', {
	/* eslint-disable-next-line func-name-matching */
	value: async function add(id, amount) {
		const user = currency.get(id);
		if (user) {
			user.balance += Number(amount);
			return user.save();
		}
		const newUser = await Users.create({ user_id: id, balance: amount });
		currency.set(id, newUser);
		return newUser;
	},
});

Reflect.defineProperty(currency, 'getBalance', {
	/* eslint-disable-next-line func-name-matching */
	value: function getBalance(id) {
		const user = currency.get(id);
		return user ? user.balance : 0;
	},
});




const client = new Discord.Client({partials: ["USER", "MESSAGE", "CHANNEL", "REACTION"]});
client.commands = new Discord.Collection(); //Discord collection = Extended JScript map

const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}








client.once('ready', async () => {
	const storedBalances = await Users.findAll();
    storedBalances.forEach(b => currency.set(b.user_id, b));
	console.log(`Logged in as ${client.user.tag}!`);
    console.log('Ready!');
});

client.on('message', async message => {
	if(this.isBotMakingStoryDecision)
	{
		message.channel.send("You cant chat or type in any commands before all necessary players made a decision. Use the voice channel to communicate with your team.")
		return;
	}

	if (!message.content.startsWith(config.prefix) || message.author.bot) 
	{
			//Breche auslesen ab wenn command nicht mit ! beginnt
			return;
	}

	const args = message.content.slice(config.prefix.length).trim().split(/ +/); //Entferne das Prefix vom Command
	const commandName = args.shift().toLowerCase(); //Ändere die Ausgabe in LowerCase
    currency.add(message.author.id, 1);

	if(commandName === 'delete')
	{
		// entfernt alle Rollen aller User, damit das Spiel resettet wird
		for(const [memberId, member] of message.guild.members.cache.entries())
		{
			if(member.user.bot || member.hasPermission("ADMINISTRATOR"))
			{
				continue;
			}
			//member.user.kick();
			member.roles.remove(member.roles.cache);
		}

		const iterations = 1;
		// löscht alle Nachrichten in allen Channels (derzeiut werden effektiv (100 * iterations) Nachrichten entfernt)
		for(let i = 0; i < iterations;i++)
		{
			await resetGame();
		}

		await pinMessages();
	}

	if (!client.commands.has(commandName)) return; //Breche ab wenn das Command in der Collection nicht existiert
	

    const command = client.commands.get(commandName); //Suche das richtige Command aus der Collection
	try {
		command.execute(message, args); //Übergib message und args an Command
	} catch (error) {
		console.error(error); //Errorausagbe wenn Command nicht ausgeführt werden kann
		message.reply('there was an error trying to execute that command!');
	}

});


client.on('messageReactionAdd', async (reaction,user) => {
	if(reaction.message.partial) await reaction.message.fetch();
	if(reaction.partial) await reaction.fetch();
	if(user.bot) return;
	if(!reaction.message.guild) return;


	// Checking if reaction was one of the user roles
	for(let i = 0; i < roleClaims.allGameRoles.length;i++)
	{
		if(reaction.emoji.name === roleClaims.allGameRoles[i].emoji)
		{
			console.log("reacted to an emoji role");
			const userTemp = reaction.message.guild.members.cache.get(user.id);
			
			const otherUserHasRoleAlready = roleClaims.hasAnybodyRoleExceptUser(
				reaction.message.guild.members.cache,
				user,
				roleClaims.allGameRoles[i]);

			if(otherUserHasRoleAlready)
			{
				console.log("Somebody else has the role already");
				reaction.message.channel.send("Jemand anderes hat die Rolle bereits gewählt. Wähle bitte eine andere aus.")
				return;
			}


			if(roleClaims.hasUserGameRole(userTemp))
			{
				console.log("user has a gameRole");
				const userReactions = reaction.message.reactions.cache.filter(reaction => reaction.users.cache.has(user.id));
				for (const reaction of userReactions.values()) {
					await reaction.users.remove(user.id);
				}
				roleClaims.removeUserGameRoles(userTemp);

				// Check if player has already another gameRole 
				// -> remove other gameRole
				// -> remove "reaction"
				// -> remove userId of other role in gameUsers 
				//..............................
				//..............................
			};
			
			
			userTemp.roles.add(roleClaims.allGameRoles[i].id);
			const currentGameUser = gameUsers.getUserByMemberRoleId(roleClaims.allGameRoles[i].id);
			currentGameUser.userId = userTemp.id;
			
			if(gameUsers.areAllUsersReadyToPlay())
			{
				const startGame = require('./commands/manage/start.js');
				
				// Start the game.
				// give them the necessary rights (player-Role?)
				return;
			}
			
			//console.log("Waiting for other players to choose a role.");
		}
	}
 
})

client.on('messageReactionRemove', async (reaction,user) => {
	if(reaction.message.partial) await reaction.message.fetch();
	if(reaction.partial) await reaction.fetch();
	if(user.bot) return;
	if(!reaction.message.guild) return;

	for(let i = 0; i < roleClaims.allGameRoles.length;i++)
	{
		if(reaction.emoji.name === roleClaims.allGameRoles[i].emoji)
		{
			console.log("reacted to an emoji role");
			const userTemp = await reaction.message.guild.members.cache.get(user.id);
			userTemp.roles.remove(roleClaims.allGameRoles[i].id);
		}
	}

})

const resetGame = async () =>
{
	for(const [channelId, channel] of client.channels.cache.entries())
	{
		if(channel.isText())
		{
			console.log("clear channel: " + channel.name);
			await channel.bulkDelete(100,true);
		}
	}
}

const pinMessages = async () =>
{
	for(const [channelId, channel] of client.channels.cache.entries())
	{
		if(channel.isText())
		{
			console.log("pin message to channel: " + channel.name);
			const embedPin = gameChannels.getChannelEmbedPin(channel.id);
			await (await channel.send({embed: embedPin})).pin();
		}
	}
}

//Willkommen-Nachricht, die im ersten Channel angezeigt wird --> INTRO
const welcomeEmbed = new Discord.MessageEmbed()
.setColor('#0099ff')
.setTitle('some title')
.setURL('https://discord.js.org/')
.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
.setDescription('Some description here')
.setThumbnail('https://i.imgur.com/wSTFkRM.png')
.addFields(
	{ name: 'Regular field title', value: 'Some value here' },
	{ name: '\u200B', value: '\u200B' },
	{ name: 'Inline field title', value: 'Some value here', inline: true },
	{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
	
	
dotenv.config(); //Configures ability to read .env
client.login(process.env.TOKEN); //Grab token from .env since its hidden from github