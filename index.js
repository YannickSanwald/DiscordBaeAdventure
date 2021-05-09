// index.js
const fs = require('fs'); // Extension fürs Discord-eigene File System
const dotenv = require('dotenv'); // Extension um .env's zu handlen
const Discord = require('discord.js'); // Standard Discord Bot Commands
const { prefix, token } = require('./config.json'); // .json mit Config Optionen wie dem verwendeten Prefix

const client = new Discord.Client();

// Initializierung für die Datenbank
const { Users, ItemList } = require('./dbObjects');
const { Op } = require('sequelize');


const currency = new Discord.Collection();
module.exports = { currency } // Modul exportiert currency an commands
client.commands = new Discord.Collection(); //Discord collection = Extended JScript map

const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}



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

dotenv.config(); //Configures ability to read .env

client.once('ready', async () => {
    const storedBalances = await Users.findAll();
    storedBalances.forEach(b => currency.set(b.user_id, b));
	console.log(`Logged in as ${client.user.tag}!`);
    console.log('Ready!');
});

client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return; //Breche auslesen ab wenn command nicht mit ! beginnt
	const args = message.content.slice(prefix.length).trim().split(/ +/); //Entferne das Prefix vom Command
	const commandName = args.shift().toLowerCase(); //Ändere die Ausgabe in LowerCase
    currency.add(message.author.id, 1);

	if (!client.commands.has(commandName)) return; //Breche ab wenn das Command in der Collection nicht existiert

    const command = client.commands.get(commandName); //Suche das richtige Command aus der Collection

	try {
		command.execute(message, args); //Übergib message und args and Command
	} catch (error) {
		console.error(error); //Errorausagbe wenn Command nicht ausgeführt werden kann
		message.reply('there was an error trying to execute that command!');
	}
});


client.login(process.env.TOKEN); //Grab token from .env since its hidden from github