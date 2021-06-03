
const Discord = require('discord.js'); // Standard Discord Bot Commands

const role1emoji = '💩';
const role2emoji = '🤓';
const role3emoji = '🥳';

module.exports = {
	name: 'start',
	description: 'Starts game.',
	async execute(message) {
        let emb = await message.channel.send({embed: startEmbed});
        emb.react(role1emoji);
        emb.react(role2emoji);
        emb.react(role3emoji);
    },
};

const startEmbed = {
    "title": "Welcome to our game!",
    "description": "Dieses Spiel soll das [__Social Gaming__](http://social-gaming-days.de/) untersützen und euch als Gruppe Spaß machen!\n\n",
    "url": "http://social-gaming-days.de/",
    "color": 123335,
    "timestamp": "2021-05-27T11:07:21.270Z",
    "footer": {
      "text": "footer text"
    },
    "thumbnail": {
      "url": "https://www.gameswirtschaft.de/wp-content/uploads/2020/05/Social-Gaming-Days-2020-Gamescom.jpg"
    },
    "fields": [
      {
        "name": "Wie beginnen wir das Spiel?",
        "value": "Bevor ihr mit der Sotry anfangen könnt, muss jeder Spieler eine Rolle auswählen, die er/sie/es im Verlauf des Spiels weiterhin benutzen wird."
      },
      {
        "name": role1emoji,
        "value": "Every walk to the toilet means pain"
      },
      {
        "name":role2emoji ,
        "value": "I love books almost as much as dicks"
      },
      {
        "name":role3emoji ,
        "value": "I love ecstasy almost as much as dicks"
      },
      {
        "name": "<:thonkang:219069250692841473>",
        "value": "these last two",
        "inline": true
      },
      {
        "name": "<:thonkang:219069250692841473>",
        "value": "are inline fields",
        "inline": true
      }
    ]
  };