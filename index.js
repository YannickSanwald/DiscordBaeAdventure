// imports
const fs = require('fs'); // Extension fürs Discord-eigene File System
const dotenv = require('dotenv'); // Extension um .env's zu handlen
const Discord = require('discord.js'); // Standard Discord Bot Commands
const config = require('./config.json'); // .json mit Config Optionen wie dem verwendeten Prefix

const gameProgress = require('./gameLogic/GameStoryProgress.js');
const gameStoryBits = require('./gameLogic/GameStoryBits.js');
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
	if (!message.content.startsWith(config.prefix) || message.author.bot) 
	{
			//Breche auslesen ab wenn command nicht mit ! beginnt
			return;
	}

	const args = message.content.slice(config.prefix.length).trim().split(/ +/); //Entferne das Prefix vom Command
	const commandName = args.shift().toLowerCase(); //Ändere die Ausgabe in LowerCase
    //currency.add(message.author.id, 1);

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
	
	if(!checkIfUserIsInVotingAndCommandIsValid(message,commandName))
	{
		message.reply(message.author.username + ": Du kannst während eines Votings keine Kommandos schicken, die nicht zum Voting gehören!")
	}

    const command = client.commands.get(commandName); //Suche das richtige Command aus der Collection
	try {
		command.execute(message, args); //Übergib message und args an Command
	} catch (error) {
		console.error(error); //Errorausagbe wenn Command nicht ausgeführt werden kann
		message.reply('there was an error trying to execute that command!');
	}

});

const checkIfUserIsInVotingAndCommandIsValid = function(message,command)
{
	const storyBit = gameStoryBits.getCurrentStoryBit(message.channel.id);
	if(storyBit != null)
	{
		if(storyBit.isFinished === false && storyBit.isActive === true)
		{
			if(command === "!yes" || command === "!no" || command === "next" || command === "left" || command === "right")
			{
				return true;
			}
			return false;
		}
	}
	return true;
}

const resetGame = async () =>
{
	gameProgress.resetStoryProgress();
	gameStoryBits.resetStory();
	gameInventory.resetInventory();
	
	const forestPathPuzzle = require('./gameLogic/ForestPathPuzzle.js');
	forestPathPuzzle.reset();
	const startGame = require('./commands/manage/start.js');
	startGame.hasGameStarted = false;

	// delete all texts in all channels
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

// Discord bietet keine Möglichkeit, den Wechsel/Eintritt in einen Text Channel zu erkennen
// Um den Umstand zu umgehen, wird einfach darauf gewartet, bis der User etwas tippt. Daraufhin wird über die Channel ID das derzeitige StoryBit ermittelt
client.on('typingStart', async(channel,user) => {
	const storyBit = gameStoryBits.getCurrentStoryBit(channel.id);
	if(storyBit === null)
	{
		return;
	}

	if(storyBit != null)
	{
		if(storyBit.isFinished === false && storyBit.isActive === false)
		{
			storyBit.isActive = true;
			storyBit.parts[0].isPosted = true;
			await channel.send(storyBit.parts[0].text);
		}
	}
});


client.on('messageReactionAdd', async (reaction,user) => {
	if(reaction.message.partial) await reaction.message.fetch();
	if(reaction.partial) await reaction.fetch();
	if(user.bot) return;
	if(!reaction.message.guild) return;

	const startGame = require('./commands/manage/start.js');

	if(startGame.hasGameStarted)
	{
		return;
	}
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
				reaction.message.channel.send(`${user.username}: Jemand anderes hat die Rolle ${reaction.emoji.name} bereits gewählt. Wähle bitte eine andere aus.`)
				return;
			}	
			
			userTemp.roles.add(roleClaims.allGameRoles[i].id);
			const currentGameUser = gameUsers.getUserByMemberRoleId(roleClaims.allGameRoles[i].id);
			currentGameUser.userId = userTemp.id;
			
			if(gameUsers.areAllUsersReadyToPlay())
			{
				if(startGame.checkIfGameCanStart())
				{
					startGame.hasGameStarted = true;
					reaction.message.channel.send("Alle User sind bereit für das Spiel! Wechselt bitte in den 'Crash' Channel, um los zu legen!");
				}
				return;
			}		
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
			if(userTemp != undefined)//userTemp.roles.cache.has(roleClaims.allGameRoles[i].id))
			{
				userTemp.roles.remove(roleClaims.allGameRoles[i].id);
				const currentGameUser = gameUsers.getUserByMemberRoleId(roleClaims.allGameRoles[i].id);
				currentGameUser.userId = "NONE";
			}
		}
	}

})


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