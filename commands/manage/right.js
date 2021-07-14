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
                    return message.channel.send("Ihr biegt rechts ab und lauft eine ganze Weile weiter durch den Wald. Auf einmal seht ihr eine mittelgroße Gruppe lautstark auf euch zu kommen.\n"
                            +"Ihr biegt links ab und lauft eine ganze Weile weiter durch den Wald. Auf einmal seht ihr eine mittelgroße Gruppe lautstark auf euch zu kommen.\n"
                            +"Bei genauerem Hinsehen stellt ihr etwas verwirrt fest, dass es sich bei den Leuten die immer näher kommen es sich nicht um Menschen handelt. \n"
                            +"Es ist ein Wolf, der einen großes Säckchen Kreide mit sich herumträgt und 7 extrem aufgedrehte Geißlein.\n"
                            +"Als ihr sie anspricht bleiben sie wie angewurzelt stehen. Nach einer viel zu langen Starre fangen sie sich an sehr betroffen und entlarvt anzusehen.\n"
                            +"Der Blick schwenkt wieder zu dir und deiner Gruppe….Zu Sich…..Zu Euch….Zu sich bis sie langsam beginnen Schritt für Schritt in die entgegengesetzte Richtung zu gehen.\n"
                            +"Als du erneut versuchst sie Anzusprechen nehmen sie ihre Füße in die Hand und rasen davon!\n\n"
                            +"Verwirrt geht ihr weiter auf dem Weg, bis euch der Wald wieder sehr bekannt vorkommt.\n"
                            +"Verdammt…ihr seid wieder zurück gelaufen und steht vor einer Kreuzung. Wohin soll es gehen?\n"
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