const gameProgress = require('./GameStoryProgress.js');
const gameChannels = require('./GameChannels.js');
const gameInventory = require('./GameInventory.js');
const gameItems = require('./GameItem.js');



const OPTION_NEXT = "!NEXT";
const OPTION_YES = "!YES";
const OPTION_NO = "!NO";
const OPTION_LEFT = "!LEFT";
const OPTION_RIGHT = "!RIGHT";

const commandPromptNext = `\n\n(Bitte eine Person einmal ${OPTION_NEXT} eingeben!)`;
const commandPromptLeftRight = `\n\n(Bitte einmal ${OPTION_LEFT} oder ${OPTION_RIGHT} eingeben!)`;

module.exports = {
    storyBits : {
        crashWelcome: 
        {
            isActive : false,
            isFinished: false,
            options: [OPTION_NEXT],
            parts: [
                {
                    isPosted: false,
                    text: "Was für ein schöner Tag. Ihr und eure Kommilitonen aus der Uni dachtet: \n"
                    + "\"Was für ein Spaß! Lasst uns doch an diesem Camp-Adventure im Wald teilnehmen\“\n." 
                    +"Eine ganze Woche weg von Stress und Hektik aus dem Alltag. Ihr freut euch, unterhaltet euch"
                    +"und plötzlich ist der Spaß vorbei. Der Bus bleibt liegen. Es ist gerade 18 Uhr, die Dämmerung hat begonnen.\n" 
                    + commandPromptNext
                },
                {
                    isPosted: false,
                    text: "'Heheheheheheheeeee.....Ich möchte ein Spiel mit Euch spielen!!'\n\n"
                    +"Ihr seid verwirrt. Ist das... Echt jetzt?! Die Jigsaw-Puppe!? Er hebt mit seinem Fahrrad vom Boden ab und schwebt auf die Motorhaube des Busses.\n"
                    +"'Heheheheheee... Ich heiße Euch herzlich Willkommen auf meinem neuen Grundstück! Gerade wurde mir schon langweilig und ich wollte auf die Suche nach Opfern gehen. Wunderschön, dass ich Euch gefunden habe! Ihr habt 72 Stunden Zeit aus diesem Wald zu kommen - oder ihr werdet sterben! In 72 Stunden wird hier alles zu Boden gerodet, weil mein neues Schlachthaus hier gebaut wird. Ich feiere dies mit einem wunderschönen Bomben-Feuerwerk! Nichts geht schneller! Heheheheheheeee... Vielleicht könnt ihr es schaffen. Viel Spaß!'\n\n"
                    +"Weg war er. Manche von euch haben versucht ihn mit dem Handy zu filmen, jedoch sind diese verschwunden. Auch die anderen, die aus dem Schock kommen, suchen ihre Handys... vergebens. Ihr schaut euch gegenseitig an. Jeder von euch denkt dasselbe: 'WTF?'."
                    +commandPromptNext
                },
                {
                    isPosted: false,
                    text: "Ihr wollt den Busfahrer fragen, wie weit das Camp noch entfernt ist, doch wo ist er? Ihr steigt aus dem Bus und schaut herum… Nichts anderes als der Waldweg und Bäume. Viele Bäume. Wo sind wir nochmal...? Ihr ruft nach ihm… Nichts. Ein paar rufen weiter und die andere Hälfte durchsucht den Bus. Es muss doch bestimmt ein Notruftelefon hier sein... Nichts. Hier seid Ihr und müsst einen Weg aus diesem Wald finden, in dem Ihr gestrandet seid." 
                    +commandPromptNext
                },
                {
                    isPosted: false,
                    text: "Ihr beginnt langsam zu realisieren, dass ihr euch heute nicht mehr von der Crashside wegbewegen werdet. Allgemeine Unruhe macht sich breit. Nun muss etwas getan werden. Ihr bereitet euch für die kommende Nacht vor… Ohje! Ihr habt keine Taschenlampen… Oder Heizungen… Was gibt’s eigentlich zum Futtern? "
                    + "\n\n Achtung: In jedem Discord-Channel gibt es gepinnte Nachrichten! Diese findet ihr rechts oben über den Pin Button. Hier stehen eure Aufgaben, Ziele und Interaktionsmöglichkeiten mit der Welt! Lest euch diese gut durch und gestaltet gemeinsam Strategien, um das Abenteuer zu bestehen."
                }
            ],
            onFinish: function()
            {
                gameProgress.getProgressStateByName("AfterCrash").currentState = true;
            }
        },
        forestPath: 
        {
            isActive: false,
            isFinished :false,
            options: [OPTION_LEFT, OPTION_RIGHT],
            parts: [
                {
                    isPosted: false,
                    text: "Starttext im ForestPath."
                        +commandPromptLeftRight,
                },
                {
                    isPosted: false,
                    text: "Tiefer im Wald angekommen, teilt sich der Weg erneut. Wo lang wollt ihr gehen?"
                            +commandPromptLeftRight,
                },
                {
                    isPosted: false,
                    text: "Ihr seid an Gabelung 3 angekommen."
                        +commandPromptLeftRight,
                },
                {
                    isPosted:false,
                    text: "Ihr seid an Gabelung 4 angekommen."
                        +commandPromptLeftRight,
                },
                {
                    isPosted: false,
                    text: "Der Wald lichtet sich und ihr seht eine Hütte. Wechselt in den Channel 'Cabin'!",
                }
            ],
            onFinish: function()
            {
                gameProgress.getProgressStateByName("ForestPathDone").currentState = true;
            }
        },
        bridgePuzzle: 
        {
            isActive: false,
            isFinished :false,
            options: [OPTION_NEXT],
            parts: [
                {
                    isPosted: false,
                    text: "Hier kommt der Text mit der Stoned Group. STREICHT DIE MAP AUS DEM TEXT"
                        +commandPromptNext,
                },
                {
                    isPosted: false,
                    text: "Hier kommt der Brückentext mit dem Rätsel"
                            +commandPromptNext,
                },
                {
                    isPosted: false,
                    text: "Hier kommt eine Glükwunsch Nachricht und der Verweis, in den Channel Hill zu wechseln."
                },
            ],
            onFinish: function()
            {
                gameProgress.getProgressStateByName("FinishedBridgePuzzle").currentState = true;
            }
        },
        cabinWelcome: 
        {
            isActive: false,
            isFinished :false,
            options: [OPTION_NEXT],
            parts: [
                {
                    isPosted: false,
                    text: "Ihr hört aus der Ferne wummernde Bässe und könnt den Geruch von Marihuana und alten Kartoffelsack wahrnehmen... Ihr geht weiter und der Wald lichtet sich. Ihr erkennt eine sehr alte Cabin mit Schornstein, aus dem grüner Rauch empor steigt. Neben der Cabin sind ein Wolf und sieben Geißlein und schnüffeln Kreide, flüchten aber, als sie euch sehen:\n\n 'Scheiße! Die Bullen!' \n\nIhr schaut euch verwirrt an. Ohne groß nachzudenken geht ihr zur Tür und klopft an. Es passiert nichts."  
                            + "Ihr klopft erneut und der grüne Rauch dringt durch alle Seiten der Tür."
                            + "Plötzlich fliegt die Tür auf!"
                            + "\n\nVor euch steht ein Mann von mehr als 2 Meter. Er trägt einen spitzen Hut, ein graues Gewand voll mit Löchern und hat graue Haare. Mit seiner Pfeife im Mundwinkel beugt er sich zu euch: \n\n'Seid ihr Partylauch? Kennen wir uns? Wo sind die anderen Pizzagesichter?'\n\nEr schaut sich um und pafft an der Pfeife:\n\n'Hmm. Die Luschen. Was wollt ihr?'"
                            + commandPromptNext,
                },
                {
                    isPosted: false,
                    text: "Es scheint jedoch nicht so, als ob er euch wirklich zuhört... \n\nAus dem nichts streckt euch Gandalf folgendes ein 'Nokia 3410' entgegen."
                            +"\n\nNIMMT! Ich brauch das Teil nicht mehr, vielleicht könnt ihr damit was anfangen. Ah der Akku ist fast leer, hab hier keinen Strom... EY! Habt ihr auch Hunger? Wo ist denn der blöde Wolf, er hat mir Ziglein versprochen...'"
                            +"\n\nIhr versucht das Nokia zu benutzen, jedoch scheint ihr in diesem Tal kein Netz zu haben."
                            +"\nGandalf dreht sich um und verschwindet im Haus. Er kommt mit einem riesigen Beutel zurück, murmelt etwas und plötzlich ist ein ganzes Fressgelage vor euch."
                            +"\n\n'Bedient Euch! Pott ist im Haus, das andere sollte der Wolf mitbringen... Wenn ihr bisschen baden wollt, da hinten ist ein See! Ihr seid nicht von hier, was? Komm hier ein Shortcut zu eurem Camp, könnt jederzeit herkommen wenn ihr wollt!'"
                            +"\n\nIhr erhaltet:\n"
                            +"\nNokia +1\nFisch +6\nBrot +3\nMaiskolben +3\nBier +6\nHolz +5",
                }

            ],
            onFinish: function()
            {
                gameInventory.addItem(gameItems.itemFactory.bread,3);
                gameInventory.addItem(gameItems.itemFactory.wood,5);
                gameInventory.addItem(gameItems.itemFactory.fish,9);
                gameInventory.addItem(gameItems.itemFactory.corn,3);
                gameInventory.addItem(gameItems.itemFactory.beer,6);
                gameProgress.getProgressStateByName("ForestPathDone").currentState = true;
            }
        },     
        toArray: function()
        {
            return [
                this.crashWelcome,
                this.forestPath,
                this.bridgePuzzle,
                this.cabinWelcome,
            ]
        }
    },

    validateUserInput: function(message,inputCommand)
    {
        if(!this.options.includes(inputCommand))
        {
            message.channel.send(`${inputCommand} von ${message.author.name} ist kein gültiges Kommando.\n Alle Kommandos sind gesperrt, solang ein Voting stattfindet.`);
        }

        const currentBit = this.getCurrentStoryBit(message.channel.id);
    },

    getCurrentStoryBit: function(channelId)
    {
        if(channelId === gameChannels.channelFactory.crash.id)
        {
            if(gameProgress.getProgressStateByName("AfterCrash").currentState == false)
            {
                return this.storyBits.crashWelcome;
            }
        }
        else if(channelId === gameChannels.channelFactory.camp.id)
        {
            
        }
        else if(channelId === gameChannels.channelFactory.forest.id)
        {
            if(gameProgress.getProgressStateByName("ForestPathDone").currentState == false)
            {
                return this.storyBits.forestPath;
            }
        }
        else if(channelId === gameChannels.channelFactory.clearing.id)
        {
            if(gameProgress.getProgressStateByName("").currentState == false)
            {

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
        else if(channelId === gameChannels.channelFactory.mountain.id)
        {

        }

        return null;
    },

    getNextPart: function(storyBit)
    {
        for(let i = 0; i < storyBit.parts.length;i++)
        {
            if(storyBit.parts[i].isPosted)
            {
                continue;
            }

            if(i === storyBit.parts.length - 1)
            {
                storyBit.isActive = false;
                storyBit.isFinished = true;
                storyBit.onFinish();
            }

            storyBit.parts[i].isPosted = true;
            return storyBit.parts[i];
        }
        return null;
    },
    getPreviousPart: function(storyBit)
    {
        for(let i = 0; i < storyBit.parts.length;i++)
        {
            if(storyBit.parts[i].isPosted)
            {
                continue;
            }

            if(i == 0)
            {
                return storyBit.parts[0];
            }

            return storyBit.parts[i-1];
        }
    },


    resetStory: function()
    {
        const allStoryBits = this.storyBits.toArray();
        for(let i = 0;  i < allStoryBits.length;i++)
        {
            allStoryBits[i].isActive = false;
            allStoryBits[i].isFinished = false;
            for(let j = 0; j < allStoryBits[i].parts.length;j++)
            {
                allStoryBits[i].parts[j].isPosted = false;
            } 
        }
    }
}