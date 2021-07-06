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
	name: 'left',
	description: 'Left Command for votings',
	execute(message) {
        const channelId = message.channel.id; 
        const currentUser = gameUsers.getUserByMemberRoles(message.member.roles);


        if(channelId === gameChannels.channelFactory.forest.id)
        {
            if(gameStoryBits.storyBits.forestPath.isActive && forestPathPuzzle.isMakingDecision === false)
            {
                if(forestPathPuzzle.forestPathCounter === 0)
                {
                    forestPathPuzzle.isMakingDecision = true;
                    forestPathPuzzle.forestPathCounter= 1;
                    return message.channel.send("In der Ferne könnt ihr eine Lichtung erkennen auf die ihr drauf zugeht. Auf dem Weg trefft ihr ein kleines Mädchen mit einer roten Mütze und einen Wolf, die vertieft in ein Gespräch sind." 
                           +"\n\nWollt ihr sie ansprechen?"
                           + commandPromptYesNo)
                }
                else if(forestPathPuzzle.forestPathCounter === 1)
                {
                    forestPathPuzzle.forestPathCounter=2;
                    return message.channel.send("Nach ca. 2h laufen, erscheint plötzlich ein wildes Bambi aus dem Gebüsch, welches euch freundlicherweise darauf hinweist, dass euer Orientierungssinn das Allerletzte ist. Aus Mitleid bietet Bambi euch an den richtigen Weg zu weisen. Am Ende des Weges seht ihr, wie Bambi sich auf den Weg zurück macht."
                            + gameStoryBits.storyBits.forestPath.parts[2].text);
                }
                else if(forestPathPuzzle.forestPathCounter === 2)
                {
                    forestPathPuzzle.forestPathCounter=1;
                    return message.channel.send("Wieder einmal ein langer langweiliger Weg. So langsam fühlt ihr euch mehr wie auf einem Wanderurlaub wie einer Suche nach überlebenswichtigen Gegenständen. Ihr beginnt euch schon zu wundern wie lange der Weg diesmal dauern soll, bis ihr plötzlich ein lautes Seufzen aus dem Gebüsch hört. Es ist Bambi, das völlig entsetzt mit eurer Unfähigkeit ist. 'Ihr habt gerade erfolgreich den Weg in die falsche Richtung genommen' sagt es höhnend. Gefolgt von den Worten: 'Willkommen an der Gabelung 2'."
                    + commandPromptLeftRight);
                }
                else if(forestPathPuzzle.forestPathCounter===3)
                {
                    forestPathPuzzle.forestPathCounter = 4;
                    gameStoryBits.storyBits.forestPath.onFinish();
                    return message.channel.send(gameStoryBits.storyBits.forestPath.parts[4].text);
                }
            }  
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

        return message.channel.send('Das Left-Command hat hier keine Funktion!\nVersuchst du an einem bereits abgeschlossenen Voting teilzunehmen? Tut mir leid, aber die Vergangenheit bleibt Vergangenheit!');
	},
};