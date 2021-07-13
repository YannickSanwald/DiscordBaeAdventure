const gameItems = require('../../gameLogic/GameItem.js');
const gameInventory = require('../../gameLogic/GameInventory.js');
const gameStoryProgress = require('../../gameLogic/GameStoryProgress.js');
const gameChannels = require('../../gameLogic/GameChannels.js');
const gameUsers = require('../../gameLogic/GameUsers.js');

module.exports = {
	name: 'open',
	description: 'Öffnet die Tür in der Ruine',
	execute(message) {
        const channelId = message.channel.id; 

        if(!this.isChannelValid(channelId))
        {
            return message.channel.send("Du kannst hier nichts öffnen. Versuche es woanders.");
        }
        
        const currentUser = gameUsers.getUserByMemberRoles(message.member.roles);
        
        // Versuchen die Tür in der Ruine zu öffnen
        if(channelId === gameChannels.channelFactory.ruin.id)
        {
            if(gameStoryProgress.getProgressStateByName("FoundKey").currentState == true) {
                gameStoryProgress.getProgressStateByName("OpenedDoor").currentState = true;
                return message.channel("Ihr habt die Tür geöffnet! Gebt !next ein um das innere zu durchsuchen.");
            } else {
                return message.channel("Ihr habt keinen passenden Schlüssel für diese Tür. Normalerweise findet man Schlüssel in Gebäuden. . .")
            }
        }    
	},

    isChannelValid: function(channelId)
    {
        if(channelId === gameChannels.channelFactory.ruin.id)
        {
            return true;
        }

        return false;
    },
};