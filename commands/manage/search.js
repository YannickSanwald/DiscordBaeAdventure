const gameItems = require('../../gameLogic/GameItem.js');
const gameInventory = require('../../gameLogic/GameInventory.js');
const gameStoryProgress = require('../../gameLogic/GameStoryProgress.js');
const gameChannels = require('../../gameLogic/GameChannels.js');
const gameUsers = require('../../gameLogic/GameUsers.js');

module.exports = {
	name: 'search',
	description: 'Durchsucht eure Umgebung.',
	execute(message) {
        const channelId = message.channel.id; 

        if(!this.isChannelValid(channelId))
        {
            return message.channel.send("Du kannst hier nichts untersuchen. Versuche es woanders.");
        }
        
        const currentUser = gameUsers.getUserByMemberRoles(message.member.roles);
        
        if(!currentUser.energy >= this.energyCost)
        {
            return message.channel.send(`Du hast nicht genug Energie, deine Umgebung zu durchsuchen! Du brauchst mindestens ${this.energyCost} um Holz zu sammeln.`)
        }

        currentUser.energy -= this.energyCost;
        currentUser.occupationTimeStamp = message.createdAt.getTime() + this.occupationTime;

        // Cabin durchsuchen für Schlüssel
        if(channelId === gameChannels.channelFactory.cabin.id)
        {
            if(gameStoryProgress.getProgressStateByName("FoundKey").currentState == false) {
                gameStoryProgress.getProgressStateByName("FoundKey").currentState = true;
                gameInventory.addItem(gameItems.itemFactory.key);
                return message.channel.send("Ihr habt einen Schlüssel gefunden! Normalerweise öffnet man damit Türen . . .");
            } else {
                gameInventory.addItem(gameItems.itemFactory.berries);
                return message.channel.send(`Success! Du hast Beeren gesammelt und bekommst:`
                + gameItems.getItemByName("berries").name
                + `\n ${gameItems.getItemByName("berries").description}`);
            }
        }    

        if(channelId === gameChannels.channelFactory.camp.id)
        {
            {
                gameInventory.addItem(gameItems.itemFactory.berries);
                return message.channel.send(`Ihr durchsucht die Umgebumg des Camps und findet ein paar Beeren.`
                + gameItems.getItemByName("berries").name
                + `\n ${gameItems.getItemByName("berries").description}`);
            }
        }    
	},

    isChannelValid: function(channelId)
    {
        if(
            channelId === gameChannels.channelFactory.cabin.id
            || channelId === gameChannels.channelFactory.lake.id)
        {
            return true;
        }

        return false;
    },
    
    
    energyCost : 10,
    occupationTime : 60000 * 5, // 60000 ms = 1 min * 5 = 5min 
    fireTime : 60000 * 8, //60000 ms = 1 min * 8 = 8 min
};