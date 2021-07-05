const gameItems = require('../../gameLogic/GameItem.js');
const gameInventory = require('../../gameLogic/GameInventory.js');
const gameStoryProgress = require('../../gameLogic/GameStoryProgress.js');
const gameStoryBits = require('../../gameLogic/GameStoryBits.js');
const gameChannels = require('../../gameLogic/GameChannels.js');
const gameUsers = require('../../gameLogic/GameUsers.js');

const forestPathPuzzle = require('../../gameLogic/ForestPathPuzzle.js');

module.exports = {
	name: 'yes',
	description: 'Yes Command for votings',
	execute(message) {
        const channelId = message.channel.id; 
        const currentUser = gameUsers.getUserByMemberRoles(message.member.roles);
             
        if(channelId === gameChannels.channelFactory.crash.id)
        {

        }
        else if(channelId === gameChannels.channelFactory.forest.id)
        {
            if(gameStoryBits.storyBits.forestPath.isActive && forestPathPuzzle.isMakingDecision === true)
            {
                if(forestPathPuzzle.forestPathCounter===1)
                {
                    forestPathPuzzle.isMakingDecision = false;
                    gameInventory.addItem(gameItems.itemFactory.water);
                    gameInventory.addItem(gameItems.itemFactory.bread, 5);

                    return message.channel.send("Als ihr sie anspricht, wirft das Mädchen euch einen Korb zu, springt auf den Wolf und reitet davon. Im Korb findet ihr eine Flasche Wasser und was zu etwas zu essen."
                        + "\nFlasche Wasser +1\nBrot +5"
                        + "\n\n"
                        + gameStoryBits.storyBits.forestPath.parts[1].text);
                }
            }  
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

        return message.channel.send('Das Yes-Command hat hier keine Funktion!\nVersuchst du an einem bereits abgeschlossenen Voting teilzunehmen? Tut mir leid, aber die Vergangenheit bleibt Vergangenheit!');
	},
};