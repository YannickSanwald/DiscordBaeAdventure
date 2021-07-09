const gameStoryProgress = require('../../gameLogic/GameStoryProgress.js');
const gameStoryBits = require('../../gameLogic/GameStoryBits.js');
const gameChannels = require('../../gameLogic/GameChannels.js');
const gameUsers = require('../../gameLogic/GameUsers.js');



module.exports = {
    name: 'nase',
    description: 'Antwort auf das Brückenrätsel',
    execute(message) {
        const channelId = message.channel.id;

        if(channelId === gameChannels.channelFactory.forest.id)
        {
            if(gameStoryBits.storyBits.bridgePuzzle.isActive)
            {
                if(gameStoryBits.storyBits.bridgePuzzle.parts[2].isPosted === true)
                {
                    gameStoryBits.storyBits.bridgePuzzle.onFinish();
                    return message.channel.send("Yes, geschafft! Ihr könnt über die Brücke und diese kleine Pause hat euch gut getan.\n\n Ihr setzt euren Weg fort. Wechselt nun in den Hill-Channel!");
                }
            }
        }
        return message.channel.send('Das Command hat hier keine Funktion!');
    }

};