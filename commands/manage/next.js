const gameItems = require('../../gameLogic/GameItem.js');
const gameInventory = require('../../gameLogic/GameInventory.js');
const gameStoryProgress = require('../../gameLogic/GameStoryProgress.js');
const gameStoryBits = require('../../gameLogic/GameStoryBits.js');
const gameChannels = require('../../gameLogic/GameChannels.js');
const gameUsers = require('../../gameLogic/GameUsers.js');

module.exports = {
	name: 'next',
	description: 'Next Command for votings',
	execute(message) {
        const channelId = message.channel.id; 
        const currentUser = gameUsers.getUserByMemberRoles(message.member.roles);
        
        // if(!currentUser.energy >= this.energyCost)
        // {
        //     return message.channel.send(`You dont have enough energy left! You need at least ${this.energyCost} to make fire.`)
        // }

        // currentUser.energy -= this.energyCost;
        // currentUser.occupationTimeStamp = message.createdAt.getTime() + this.occupationTime;
        
        if(channelId === gameChannels.channelFactory.crash.id)
        {
            if(gameStoryBits.storyBits.crashWelcome.isActive)
            {
                const bitPart = gameStoryBits.getNextPart(gameStoryBits.storyBits.crashWelcome)
                return message.channel.send(bitPart.text);
            }
        }
        else if(channelId === gameChannels.channelFactory.camp.id)
        {
           
        }
        else if(channelId === gameChannels.channelFactory.clearing.id)
        {
           
        }
        else if(channelId === gameChannels.channelFactory.cabin.id)
        {
           
        }
        else if(channelId === gameChannels.channelFactory.hill.id)
        {
           
        }
        else if(channelId === gameChannels.channelFactory.ruin.id)
        {
          
        }

        return message.channel.send('Das Next-Command hat hier keine Funktion!\nVersuchst du an einem bereits abgeschlossenen Voting teilzunehmen? Tut mir leid, aber die Vergangenheit bleibt Vergangenheit!');
	},
};