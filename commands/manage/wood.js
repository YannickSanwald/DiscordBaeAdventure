const gameItems = require('../../gameLogic/GameItem.js');
const gameInventory = require('../../gameLogic/GameInventory.js');
const gameStoryProgress = require('../../gameLogic/GameStoryProgress.js');
const gameChannels = require('../../gameLogic/GameChannels.js');
const gameUsers = require('../../gameLogic/GameUsers.js');

module.exports = {
	name: 'wood',
	description: 'Sammelt Holz in Gebieten wo dies möglich ist.',
	execute(message) {
        const channelId = message.channel.id; 

        if(!this.isChannelValid(channelId))
        {
            return message.channel.send("Du kannst hier kein Holz sammeln. Versuche es woanders.");
        }
        
        const currentUser = gameUsers.getUserByMemberRoles(message.member.roles);
        
        if(!currentUser.energy >= this.energyCost)
        {
            return message.channel.send(`Du hast nicht genug Energie, um Holz zu sammeln! Du brauchst mindestens ${this.energyCost} um Holz zu sammeln.`)
        }

        currentUser.energy -= this.energyCost;
        currentUser.occupationTimeStamp = message.createdAt.getTime() + this.occupationTime;
        
        // get wood
        if(channelId === gameChannels.channelFactory.forest.id)
        {
            gameInventory.addItem(gameItems.itemFactory.wood);
            return message.channel.send(`Success! Du hast Holz gesammelt und bekommst:`
            + gameItems.getItemByName("wood").name
            + `\n ${gameItems.getItemByName("wood").description}`);
        }
        else if(channelId === gameChannels.channelFactory.lake.id)
        {
            gameInventory.addItem(gameItems.itemFactory.wood);
            return message.channel.send(`Success! Du hast Holz gesammelt und bekommst:`
            + gameItems.getItemByName("wood").name
            + `\n ${gameItems.getItemByName("wood").description}`);
        }
        else if(channelId === gameChannels.channelFactory.camp.id)
        {
            gameInventory.addItem(gameItems.itemFactory.wood);
            return message.channel.send(`Success! Du hast Holz gesammelt und bekommst:`
            + gameItems.getItemByName("wood").name
            + `\n ${gameItems.getItemByName("wood").description}`);
        }

        //gameStoryProgress.getProgressStateByName("MadeFire").currentState = true;
        //return message.channel.send('Du hast ein Feuer gemacht. Gratulation, auch Steinzeitmenschen haben das geschafft!');
	},

    isChannelValid: function(channelId)
    {
        if(
            channelId === gameChannels.channelFactory.forest.id
            || channelId === gameChannels.channelFactory.lake.id
            || channelId === gameChannels.channelFactory.camp.id)
        {
            return true;
        }

        return false;
    },
    
    
    energyCost : 10,
    occupationTime : 60000 * 5, // 60000 ms = 1 min * 5 = 5min 
    fireTime : 60000 * 8, //60000 ms = 1 min * 8 = 8 min
};