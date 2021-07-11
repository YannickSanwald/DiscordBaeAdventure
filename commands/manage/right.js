const gameItems = require('../../gameLogic/GameItem.js');
const gameInventory = require('../../gameLogic/GameInventory.js');
const gameStoryProgress = require('../../gameLogic/GameStoryProgress.js');
const gameStoryBits = require('../../gameLogic/GameStoryBits.js');
const gameChannels = require('../../gameLogic/GameChannels.js');
const gameUsers = require('../../gameLogic/GameUsers.js');

const commandPromptYesNo = "\n\nBitte eine Person '!YES' oder '!NO' eingeben.";
const commandPromptLeftRight = `\n\n(Bitte einmal '!LEFT' oder '!RIGHT' eingeben!)`;

const forestPathPuzzle = require('../../gameLogic/ForestPathPuzzle.js');

module.exports = {
	name: 'right',
	description: 'Right Command for votings',
	execute(message) {
        const channelId = message.channel.id; 
        const currentUser = gameUsers.getUserByMemberRoles(message.member.roles);


        if(channelId === gameChannels.channelFactory.forest.id)
        {
            if(gameStoryBits.storyBits.forestPath.isActive)
            {
                if(forestPathPuzzle.forestPathCounter === 0)
                {
                    return message.channel.send("Eure Gruppe kommt aus dem Wald heraus und treffen Hänsel und Gretel.\n\n"
                            +"Hänsel: 'Was ist mit euch los?'\n"
                            +"Gretel: 'Ja genau! Euch fehlt jeglicher Orientierungssinn und jetzt seid ihr wieder am Anfang!\n\n"
                            +"Dann verschwanden sie - eine Brotlinie hinter sich herziehend - im Wald"
                            +"Wohin wollt ihr jetzt?"
                            +commandPromptLeftRight);
                }
                else if(forestPathPuzzle.forestPathCounter === 1)
                {
                    forestPathPuzzle.forestPathCounter=2;
                    return message.channel.send("TEXT MIT SIEBEN GEISLEIN"
                            + gameStoryBits.storyBits.forestPath.parts[2].text);
                }
                else if(forestPathPuzzle.forestPathCounter === 2)
                {
                    forestPathPuzzle.forestPathCounter=3;
                    return message.channel.send("Zur Abwechslung war der Weg zur nächsten Entscheidungsfindung recht kurzgehalten, denn nach nur 10 Minuten Wanderweg erspäht ihr die nächste Gabelung des Wegs."
                    + "\n\n"
                    + gameStoryBits.storyBits.forestPath.parts[3].text);
                }
                else if(forestPathPuzzle.forestPathCounter===3)
                {
                    forestPathPuzzle.forestPathCounter = 2;
                    return message.channel.send("Ihr seid schon wieder an Gabelung 3 angekommen... Toll gemacht!"
                    +commandPromptLeftRight);
                }
            }    
        }
        return message.channel.send('Das Left-Command hat hier keine Funktion!\n'
                                    +'Versuchst du an einem bereits abgeschlossenen Voting teilzunehmen? Tut mir leid, aber die Vergangenheit bleibt Vergangenheit!');
	},
};