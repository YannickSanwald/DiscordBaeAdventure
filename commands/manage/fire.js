const gameItems = require('../../gameLogic/GameItem.js');
const gameInventory = require('../../gameLogic/GameInventory.js');
const gameStoryProgress = require('../../gameLogic/GameStoryProgress.js');
const gameChannels = require('../../gameLogic/GameChannels.js');
const gameUsers = require('../../gameLogic/GameUsers.js');

module.exports = {
	name: 'fire',
	description: 'Makes fire if materials are present',
	execute(message) {
        const channelId = message.channel.id; 

        if(!this.isChannelValid(channelId))
        {
            return message.channel.send("You can't make a fire here. Try it at the crashside or in a camp.");
        }

        if(!gameInventory.hasItems(gameItems.itemFactory.wood, 10))
        {
            return message.channel.send("You dont have enough wood! You need at least 10 in your inventory!");
        }
        
        const currentUser = gameUsers.getUserByMemberRoles(message.member.roles);
        
        if(!currentUser.energy >= this.energyCost)
        {
            return message.channel.send(`You dont have enough energy left! You need at least ${this.energyCost} to make fire.`)
        }

        currentUser.energy -= this.energyCost;
        currentUser.occupationTimeStamp = message.createdAt.getTime() + this.occupationTime;
        
        // make fire
        if(channelId === gameChannels.channelFactory.crash.id)
        {
            // set timestamp for crashside
            this.isFireInCrash.value = true;
            this.isFireInCrash.timeStamp = message.createdAt.getTime();
        }
        else if(channelId === gameChannels.channelFactory.camp.id)
        {
            // set timestamp for camp
            this.isFireInCamp = true;
            this.isFireInCamp.timeStamp = message.createdAt.getTime() + this.fireTime;
        }
        else if(channelId === gameChannels.channelFactory.clearing.id)
        {
            // set timestamp for crashside
            this.isFireInClearing = true;
            this.isFireInClearing.timeStamp = message.createdAt.getTime();
        }
        else if(channelId === gameChannels.channelFactory.cabin.id)
        {
            // set timestamp for crashside
            this.isFireInCabin = true;
            this.isFireInCabin.timeStamp = message.createdAt.getTime();
        }
        else if(channelId === gameChannels.channelFactory.hill.id)
        {
            // set timestamp for crashside
            this.isFireInHill = true;
            this.isFireInHill.timeStamp = message.createdAt.getTime();
        }
        else if(channelId === gameChannels.channelFactory.ruin.id)
        {
            // set timestamp for crashside
            this.isFireInRuin = true;
            this.isFireInRuin.timeStamp = message.createdAt.getTime();
        }


        gameStoryProgress.getProgressStateByName("MadeFire").currentState = true;
        return message.channel.send('Great! You made fire! The human race proves again, that a big fiend can be an even bigger friend!');
	},

    isChannelValid: function(channelId)
    {
        if(channelId === gameChannels.channelFactory.camp.id
            || channelId === gameChannels.channelFactory.cabin.id
            || channelId === gameChannels.channelFactory.hill.id
            || channelId === gameChannels.channelFactory.ruin.id)
        {
            return true;
        }

        return false;
    },
    
    isFireInCamp:
    {
        value: false,
        timeStamp: 0,
    },

    isFireInCabin:
    {
        value:false,
        timeStamp:0,
    },

    isFireInHill:
    {
        value:false,
        timeStamp:0,
    },

    isFireInRuin:
    {
        value:false,
        timeStamp:0,
    },

    energyCost : 10,
    occupationTime : 60000 * 5, // 60000 ms = 1 min * 5 = 5min 
    fireTime : 60000 * 8, //60000 ms = 1 min * 8 = 8 min
};