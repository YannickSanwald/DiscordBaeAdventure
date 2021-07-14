const gameStoryProgress = require('../../gameLogic/GameStoryProgress.js');
const gameStoryBits = require('../../gameLogic/GameStoryBits.js');
const gameChannels = require('../../gameLogic/GameChannels.js');
const gameUsers = require('../../gameLogic/GameUsers.js');



module.exports = {
    name: 'quiz',
    description: 'Quiz mit mehreren Fragen beginnt.',
    execute(message,args) {
        if(!args.length)
        {
            console.log("No arguments given");
            return message.channel.send("Tut mir Leid... Ich verstehe nicht was ihr wollt.");
        }
        const channelId = message.channel.id;

        if(channelId === gameChannels.channelFactory.ruin.id)
        {
            if(gameStoryBits.storyBits.doingQuiz.isActive)
            {
                if(gameStoryBits.storyBits.doingRuin.parts[2].isPosted === true)
                {
                    const rightAnswer = "socialgaming";

                    if(rightAnswer === args[0])
                    {
                        this.isActive = false;
                        return message.channel.send("Ihr seid euch eurer Antwort sicher und zeigt sie dem Gnom.\n"
                                                        +"Bitte eine Person '!NEXT' eingeben");
                    }
                    return message.channel.send("Leider nicht die richtige Kombi! Versucht es erneut: https://forms.gle/j1zMmc2DuDssxJtV9 ");
                }
            }
        }
        return message.channel.send('Das Command hat hier keine Funktion!');
    },
    isActive: false

};