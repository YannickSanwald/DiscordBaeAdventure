const gameItems = require('../../gameLogic/GameItem.js');
const gameInventory = require('../../gameLogic/GameInventory.js');
const gameStoryProgress = require('../../gameLogic/GameStoryProgress.js');
const gameStoryBits = require('../../gameLogic/GameStoryBits.js');
const gameChannels = require('../../gameLogic/GameChannels.js');
const gameUsers = require('../../gameLogic/GameUsers.js');
const commandPromptNext= "\n\n Bitte ein Person '!Next' eingeben!";
const commandPromptQuiz="\n\n Zum beginnen '!Quiz' eingeben";


module.exports = {
	name: 'next',
	description: 'Next Command for votings',
	execute(message) {
        const channelId = message.channel.id; 
        const currentUser = gameUsers.getUserByMemberRoles(message.member.roles);
       
        
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
            return message.channel.send("Hier hat dieser Command keine Bedeutung! Sieh auf den Pin!");
        }
        else if(channelId === gameChannels.channelFactory.cabin.id)
        {
            if(gameStoryBits.storyBits.cabinWelcome.isActive)
            {
                const bitPart = gameStoryBits.getNextPart(gameStoryBits.storyBits.cabinWelcome)
                return message.channel.send(bitPart.text);
            }
        }
        else if (channelId === gameChannels.channelFactory.forest.id)
        {
            if(gameStoryBits.storyBits.bridgePuzzle.isActive)
            {
                const bitPart = gameStoryBits.getNextPart(gameStoryBits.storyBits.bridgePuzzle)
                return message.channel.send(bitPart.text);
            }
        }
        else if(channelId === gameChannels.channelFactory.hill.id)
        {
            if(gameStoryBits.storyBits.hillPath.isActive)
            {
                const bitPart = gameStoryBits.getNextPart(gameStoryBits.storyBits.hillPath)
                return message.channel.send(bitPart.text);
			}
            else(gameStoryBits.storyBits.openingSafe.isActive)
            {
                const bitPart = gameStoryBits.getNextPart(gameStoryBits.storyBits.openingSafe)
                return message.channel.send(bitPart.text);
			}
        }
		else if(channelId === gameChannels.channelFactory.mountain.id)
        {
            if(gameStoryBits.storyBits.finishPinish.isActive)
            {
                const bitPart = gameStoryBits.getNextPart(gameStoryBits.storyBits.finishPinish)
                return message.channel.send(bitPart.text);		
			}
          
        }

        return message.channel.send('Das Next-Command hat hier keine Funktion!\nVersuchst du an einem bereits abgeschlossenen Voting teilzunehmen? Tut mir leid, aber die Vergangenheit bleibt Vergangenheit!');
	},
};