const roles = require('../../gameLogic/RoleClaim');
const gameChannels = require('../../gameLogic/GameChannels');

const impostor = '😄';

module.exports = {
	name: 'start',
	description: 'Starts game.',
	async execute(message) {
        if(message.channel.name !== gameChannels.channelFactory.lobby.name)
        {
          return message.channel.send("You cant start the game from this channel!");
        }

        let emb = await message.channel.send({embed: startEmbed});
        for(let i = 0; i < roles.allGameRoles.length;i++)
        {
          await emb.react(roles.allGameRoles[i].emoji);
        }
       // message.client.
    },

    checkIfGameCanStart : function(members)
    {
      let memberCount = 0;
    
      for(let i = 0; i < roles.allGameRoles.length;i++)
      {
        for(const [memberId, member] of members.entries())
         {
          if(member.roles.cache.has(roles.allGameRoles[i].id))
          {
            memberCount++;
            break;
          }
        }
      }
    
      if(memberCount===roles.allGameRoles.length)
      {
        return true;
      }

      return false;
    },

    hasGameStarted: false,
};



const startEmbed = {
    "title": "Wer seid ihr?",
    "description": "Bevor ihr mit der Sotry anfangen könnt, muss jeder Spieler eine Rolle auswählen, die er/sie/es im Verlauf des Spiels weiterhin benutzen wird.",
    "color": 123335,
    "fields": [
      {
        "name": '\u200b',
        "value": '\u200b',
        "inline": false,
      },
      {
        "name": roles.allGameRoles[0].emoji + "  " + "Informatik-Student",
        "value": "Fähigkeit: xxxx"
      },
      {
        "name": roles.allGameRoles[1].emoji + "  " + "Ingenieur-Student",
        "value": "Fähigkeit: xxxx"
      },
      {
        "name": roles.allGameRoles[2].emoji + "  " + "Medizin-Student",
        "value": "Fähigkeit: xxxx"
      },
      {
        "name": roles.allGameRoles[3].emoji + "  " + "Medizin-Student",
        "value": "Fähigkeit: xxxx"
      },
      {
        "name": roles.allGameRoles[4].emoji + "  " + "Sport-Student",
        "value": "Fähigkeit: xxxx"
      },
      {
        "name": roles.allGameRoles[5].emoji + "  " + "Jura-Student",
        "value": "Fähigkeit: xxxx"
      }
    ]
  };




