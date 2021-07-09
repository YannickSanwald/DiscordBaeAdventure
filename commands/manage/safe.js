const gameStoryProgress = require('../../gameLogic/GameStoryProgress.js');
const gameStoryBits = require('../../gameLogic/GameStoryBits.js');
const gameChannels = require('../../gameLogic/GameChannels.js');
const gameUsers = require('../../gameLogic/GameUsers.js');



module.exports = {
    name: 'safe',
    description: 'Eingabe für den Versuch den Safe zu öffnen.',
    execute(message,args) {
        if(!args.length)
        {
            console.log("No arguments given");
            return message.channel.send("Tut mir Leid... Ich verstehe nicht was ihr wollt.\n"
            +"Ihr müsst den Code auch angeben, um den Safe zu öffnen.\n"
            +"z.B. !safe 0011123455556789");
        }
        const channelId = message.channel.id;

        if(channelId === gameChannels.channelFactory.hill.id)
        {
            if(gameStoryBits.storyBits.openingSafe.isActive)
            {
                if(gameStoryBits.storyBits.openingSafe.parts[0].isPosted === true)
                {
                    const rightAnswer = "77776662224442555426444664";

                    if(rightAnswer === args[0])
                    {
                        this.isActive = false;
                        return message.channel.send("Glückwünsch! Der Safe ist offen! Ihr erhaltet folgende Gegenstände als Belohnung:\n"
                                                        +"Handy-Akku Nokia  +1\n Schatzkarte  +1\n"
                                                        +"Bitte eine Person '!NEXT' eingeben");
                    }
                }
            }
        }
        return message.channel.send('Das Command hat hier keine Funktion!');
    },
    isActive: false
};