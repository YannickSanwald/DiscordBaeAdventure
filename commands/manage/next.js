const gameItems = require('../../gameLogic/GameItem.js');
const gameInventory = require('../../gameLogic/GameInventory.js');
const gameStoryProgress = require('../../gameLogic/GameStoryProgress.js');
const gameStoryBits = require('../../gameLogic/GameStoryBits.js');
const gameChannels = require('../../gameLogic/GameChannels.js');
const gameUsers = require('../../gameLogic/GameUsers.js');
const safe = require('./safe.js');


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
                if(gameStoryBits.storyBits.bridgePuzzle.parts[2].isPosted === false)
                {
                    const bitPart = gameStoryBits.getNextPart(gameStoryBits.storyBits.bridgePuzzle)
                    return message.channel.send(bitPart.text);
                }
            }
        }
        else if(channelId === gameChannels.channelFactory.hill.id)
        {
            if(gameStoryBits.storyBits.hillPath.isActive)
            {
                const bitPart = gameStoryBits.getNextPart(gameStoryBits.storyBits.hillPath)
                if(gameStoryBits.storyBits.hillPath.isFinished)
                {
                    gameStoryBits.storyBits.openingSafe.isActive = true;
                }
                return message.channel.send(bitPart.text);
			}
            else 
            {
                if(gameStoryBits.storyBits.openingSafe.isFinished === false)
                {
                    
                    if(safe.isActive === false)
                    {
                        safe.isActive = true;
                        const bitPart = gameStoryBits.getNextPart(gameStoryBits.storyBits.openingSafe)
                        return message.channel.send(bitPart.text);
                    }
                    
                }
            }
        }
		else if(channelId === gameChannels.channelFactory.mountain.id)
        {
            if(gameStoryBits.storyBits.finishGame.isActive)
            {
                const bitPart = gameStoryBits.getNextPart(gameStoryBits.storyBits.finishGame)
                return message.channel.send(bitPart.text);		
			}
          
        }

        return message.channel.send('Das Next-Command hat hier keine Funktion!\nVersuchst du an einem bereits abgeschlossenen Voting teilzunehmen? Tut mir leid, aber die Vergangenheit bleibt Vergangenheit!');
	},
};