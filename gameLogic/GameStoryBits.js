const gameProgress = require('./GameStoryProgress.js');
const gameChannels = require('./GameChannels.js');
const gameInventory = require('./GameInventory.js');
const gameItems = require('./GameItem.js');
const { toArray } = require('lodash');


const commandPromptNext = "\n\n(Bitte eine Person einmal '!NEXT' eingeben!)";
const commandPromptLeftRight = "\n\n(Bitte einmal '!LEFT' oder '!RIGHT' eingeben!)";


module.exports = {
    storyBits : {
        crashWelcome: 
        {
            isActive : false,
            isFinished: false,
            parts: [
                {
                    isPosted: false,
                    text: "Was für ein schöner Tag. Ihr und eure Kommilitonen aus der Uni dachtet: \n"
                    + "\"Lasst uns doch an diesem Camp-Adventure im Wald teilnehmen\“\n." 
                    +"Eine ganze Woche weg von Stress und Hektik aus dem Alltag. Ihr freut euch, unterhaltet euch"
                    +"und plötzlich ist der Spaß vorbei.\n"
                    +"Der Bus bleibt liegen. Das Netz ist auch weg...\n"
                    +"Es ist gerade 18 Uhr, die Dämmerung hat begonnen.\n https://i.imgur.com/UUSMI.jpeg" 
                    + commandPromptNext
                },
                {
                    isPosted: false,
                    text: "'Heheheheheheheeeee.....Ich möchte ein Spiel mit Euch spielen!!'\n\n https://media1.tenor.com/images/c1250510171a50e4eeccbad533b77dbf/tenor.gif?itemid=18403384"
                    +"Ihr seid verwirrt. Ist das... Echt jetzt?! Die Saw-Puppe!? Er hebt mit seinem Fahrrad vom Boden ab und schwebt auf die Motorhaube des Busses.\n"
                    +"'Heheheheheee... Ich heiße Euch herzlich Willkommen auf meinem neuen Grundstück! Gerade wurde mir schon langweilig und ich wollte auf die Suche nach Opfern gehen. Wunderschön, dass ich Euch gefunden habe!\n"
                    +"https://media1.tenor.com/images/c58f9ba25db7885774eedbaa52c6b8c0/tenor.gif?itemid=15725646 \n\nIhr habt 72 Stunden Zeit aus diesem Wald zu kommen - oder ihr werdet sterben! In 72 Stunden wird hier alles zu Boden gerodet, weil mein neues Schlachthaus hier gebaut wird. Ich feiere dies mit einem wunderschönen Bomben-Feuerwerk! Nichts geht schneller! Heheheheheheeee... Vielleicht könnt ihr es schaffen. Viel Spaß!'\n\n"
                    +"Weg war er. Manche von euch haben versucht ihn mit dem Handy zu filmen, jedoch sind diese verschwunden. Auch die anderen, die aus dem Schock kommen, suchen ihre Handys... vergebens. Ihr schaut euch gegenseitig an. Jeder von euch denkt dasselbe: 'WTF?'.\n\n"
                    +commandPromptNext
                },
                {
                    isPosted: false,
                    text: "Ihr wollt den Busfahrer fragen, wie weit das Camp noch entfernt ist, doch wo ist er? Ihr steigt aus dem Bus und schaut herum… Nichts anderes als der Waldweg und Bäume. Viele Bäume. Wo sind wir nochmal...?\n"
                    +"Ihr ruft nach ihm… Nichts. Ein paar rufen weiter und die andere Hälfte durchsucht den Bus. Es muss doch bestimmt ein Notruftelefon hier sein... Nichts.\n"
                    +"Hier seid Ihr und müsst einen Weg aus diesem Wald finden, in dem Ihr gestrandet seid.\n" 
                    +commandPromptNext
                },
                {
                    isPosted: false,
                    text: "Ihr beginnt langsam zu realisieren, dass ihr euch heute nicht mehr von der Crashside wegbewegen werdet. Allgemeine Unruhe macht sich breit. Nun muss etwas getan werden. Ihr bereitet euch für die kommende Nacht vor…\n"
                    +"Ohje! Ihr habt keine Taschenlampen… Oder Heizungen… Was gibt’s eigentlich zum Futtern? "
                    +"\n\n Achtung: In jedem Discord-Channel gibt es gepinnte Nachrichten! Diese findet ihr rechts oben über den Pin Button. Hier stehen eure Aufgaben, Ziele und Interaktionsmöglichkeiten mit der Welt! Lest euch diese gut durch und gestaltet gemeinsam Strategien, um das Abenteuer zu bestehen."
                    +"\n\n Wechselt nun bitte in den Camp-Channel! Es ist an der Zeit euer Lager für Nacht aufzubauen."
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
            parts: [
                {
                    isPosted: false,
                    text: "Da es hier nichts Interessantes mehr gibt, geht ihr in den Wald. Nach bisschen Laufen kommt ihr an eine Gabelung.\n"
                        +"https://i.imgur.com/SVlvaJU.jpeg \n"
                        +"Welchen Weg wählt ihr?\n\n"
                        +commandPromptLeftRight,
                },
                {
                    isPosted: false,
                    text: "Der Weg teilt sich erneut. Wo lang wollt ihr gehen?"
                            +"https://i.imgur.com/KDhdeM0.jpeg \n"
                            +commandPromptLeftRight,
                },
                {
                    isPosted: false,
                    text: "Ihr seid nun an einer dritten Gabelung angekommen.\n"
                        +"Welchen weg nehmt ihr jetzt?\n\n https://i.imgur.com/KaEZ0XU.jpeg"
                        +commandPromptLeftRight,
                },
                {
                    isPosted:false,
                    text: "Ihr seid an Gabelung 4 angekommen. Wie viele es wohl noch gibt?\n\n https://i.imgur.com/mTyEsQf.jpeg"
                        +commandPromptLeftRight,
                },
                {
                    isPosted: false,
                    text: "Ihr hört aus der Ferne wummernde Bässe und könnt den Geruch von Marihuana und alten Kartoffelsack wahrnehmen…\n"
                        +"Ihr geht weiter und der Wald lichtet sich.\n"
                        +"Ihr seht eine sehr alte Cabin mit Schornstein, aus dem grüner Rauch empor steigt.\n\n"
                        +"Wechselt in den Channel 'Cabin'!",
                }
            ],
            onFinish: function()
            {
                gameProgress.getProgressStateByName("ForestPathDone").currentState = true;
            }
        },
        cabinWelcome: 
        {
            isActive: false,
            isFinished :false,
            parts: [
                {
                    isPosted: false,
                    text: "Neben der Cabin sind ein Wolf und sieben Geißlein und schnüffeln Kreide, flüchten aber, als sie euch sehen:\n\n 'Scheiße! Die Bullen!' \n\n"
                            +"Ihr schaut euch verwirrt an. Ohne groß nachzudenken geht ihr zur Tür und klopft an. Es passiert nichts.\n"  
                            + "Ihr klopft erneut und der grüne Rauch dringt durch alle Seiten der Tür."
                            + "Plötzlich fliegt die Tür auf!"
                            + "\n\nVor euch steht ein Mann von mehr als 2 Meter. Er trägt einen spitzen Hut, ein graues Gewand voll mit Löchern und hat graue Haare.\n"
                            +"Mit seiner Pfeife im Mundwinkel beugt er sich zu euch: \n\n'Seid ihr Partylauch? Kennen wir uns? Wo sind die anderen Pizzagesichter?'\n\nEr schaut sich um und pafft an der Pfeife:\n\n'Hmm. Die Luschen. Was wollt ihr?'"
                            +"https://imgur.com/0sShc0p \n"
                            + commandPromptNext,
                },
                {
                    isPosted: false,
                    text: "Ihr versucht eure Situation zu erklären... Jedoch scheint es nicht so, als ob er euch wirklich zuhört... \nhttps://i.imgur.com/TTMdH7r.gif \nAus dem nichts streckt euch Gandalf folgendes ein 'Nokia 3410' entgegen."
                            +"\n\nhttps://imgur.com/YZScuTr \n\nNIMMT! Ich brauch das Teil nicht mehr, vielleicht könnt ihr damit was anfangen. Ah der Akku ist fast leer, hab hier keinen Strom...\n"
                            +"EY! Habt ihr auch Hunger? Wo ist denn der blöde Wolf, er hat mir Ziglein versprochen...'"
                            +"\n\nIhr versucht das Nokia zu benutzen, jedoch scheint ihr in diesem Tal kein Netz zu haben."
                            +"\nGandalf dreht sich um und verschwindet im Haus. Er kommt mit einem riesigen Beutel zurück, murmelt etwas und plötzlich ist ein ganzes Fressgelage vor euch. https://imgur.com/7wJz1nT "
                            +"\n\n'Bedient Euch! Pott ist im Haus, das andere sollte der Wolf mitbringen... Wenn ihr bisschen baden wollt, da hinten ist ein See! Ihr seid nicht von hier, was? Komm hier ein Shortcut zu eurem Camp, könnt jederzeit herkommen wenn ihr wollt!'"
                            +"\n\nIhr erhaltet:\n"
                            +"\nNokia +1\nFisch +6\nBrot +3\nMaiskolben +3\nBier +6\nHolz +5",
                },
                {
                    isPosted: false,
                    text: "Wenn ihr weitergehn wollt, wechselt jeweils in den Forest- oder Lake-Channel!",
                }

            ],
            onFinish: function()
            {
                gameInventory.addItem(gameItems.itemFactory.bread,3);
                gameInventory.addItem(gameItems.itemFactory.wood,5);
                gameInventory.addItem(gameItems.itemFactory.fish,9);
                gameInventory.addItem(gameItems.itemFactory.corn,3);
                gameInventory.addItem(gameItems.itemFactory.beer,6);
                gameProgress.getProgressStateByName("MetGandalf").currentState = true;
            }
        },
        bridgePuzzle: 
        {
            isActive: false,
            isFinished :false,
            parts: [
                {
                    isPosted: false,
                    text: "Ihr zieht weiter! Nach 300 m im Wald hört ihr Gelächter. Auf dem Boden vor euch ist eine Spur aus weißer Substanz und Brotkrümel…\n"
                            +"Ihr folgt dieser Spur, das Lachen wird lauter und bei einer Steingruppe sitzen Hänsel & Gretel, der Wolf und die sieben Geißlein.\n\n"
                            +"Der Wolf sieht euch als erstes und erstarrt: “BULLEN! Die sind uns gefolgt!”\n"
                            +"Nun drehen sich Hänsel & Gretel zu euch um.\n\n"
                            +"Hänsel: “Ach ihr seid’s! Na den alten Sack da hinten überstanden? Der hat echt gutes Zeug.”\n\n"
                            +"Gretel: “ Habt ihr uns was mitgebracht?”\n\n"
                            +"Der Wolf und die sieben Geißlein entspannen.\n"
                            +"Wolf: “Keine Bullen?”\n"
                            +"Geißlein 1: “Keine Bullen. Freunde?”\n"
                            +"Geißlein 2: “Freunde. Mit Pott vom alten Sack?”\n"
                            +"Geißlein 3: “Mit Pott vom alten Sack!”\n"
                            +"Die Geißlein mähen glücklich, als ihr Ihnen etwas von eurem Mitbringsel abgibt.\n\n" 
                            +"Da ihr so sozial zu der Gruppe seid, geben sie euch eine Anweisung, wie ihr zu einem Hügel kommt.\nVielleicht kriegt ihr dort Netz für ein Signal?\n\n"
                            +"“Tschüss!” rief der Wolf und er und alle anderen verschwinden im Wald."
                            +commandPromptNext,
                },
                {
                    isPosted: false,
                    text: "Ihr setzt euren Weg fort und folgt den Hinweisen der Gruppe.\n\n"
                            +"Eure Party kommt an der Brücke an, aber noch bevor ihr den ersten Schritt auf die Steinerne Brücke setzten könnt, springt ein Schatten von hinten über euch.\n\n"
                            +"Es ist Käpt’n Balu, nur diesmal ohne seine Tollkühne Crew. Das Fehlen der Crew ändert aber nicht, dass Balu euch im Weg steht.\n\n"
                            +"“Nur wenn Ihr mein Rätsel Lösen könnt, gewähre ich euch den Weg über meine Brücke.”"
                            +commandPromptNext,
                },
                {
                    isPosted: false,
                    text: "“Ich habe zwei Flügel und kann nicht fliegen.\n"
                            +"Hab einen Rücken und kann nicht liegen.\n"
                            +"Ich habe ein Bein und kann nicht stehen.\n"
                            +"Trag eine Brille und kann nicht sehen.\n"
                            +"Was bin ich?”\n Gibt die Lösung als Command ein! (z.B. !Brücke)"
                }
            ],
            onFinish: function()
            {
                gameProgress.getProgressStateByName("FinishedBridgePuzzle").currentState = true;
            }
        },
		hillPath: 
        {
            isActive : false,
            isFinished: false,
            parts: [
                {
                    isPosted: false,
                    text:"Ihr geht die restlichen Meter in Richtung Hügel.\n"
                            + "Dort angekommen stellt ihr fest, dass ihr einen Balken im Mobilfunknetz habt! Sofort versucht ihr ein SOS Signal abzusenden.\n" 
                            +"Nach 5 langen Minuten ohne Regung des Handys kommt plötzlich eine “ERROR” Meldung."
                            +"Es hat nicht funktioniert! Und der Akku ist nun auch leider leer. Ihr entscheidet euch dazu noch höher steigen, um die Wahrscheinlichkeit eines besseren Signals zu steigern.\n" 
					        +"Ihr schaut euch um und seht den Mountain!\n https://imgur.com/5mAvLvJ \n"
					        +"Was nun?\n"
                    
                },
                {
                    isPosted: false,
                    text:"Ihr begebt euch weiter in Richtung des Mountains. Selbst die Spitze ist in dem Wald gut zu erkennen.\n"
                            +"Nach einer Weile landet ihr auf einem richtigen Waldweg, dem folgend trifft ihr wieder auf das Mädchen mit der roten Mütze und den Wolf.\n"
                            +"Diese sind über etwas gebeugt, jedoch als sie euch hören rennen sie wieder weg.\n\n"
                            +"Ihr erkennt einen Safe. Neben dem Safe steht wieder ein Korb des Mädchens.\n\Ihr erhält:"
                            +"\nBrot +3\nCookies +5\nBier +2"
                            +commandPromptNext,
                } 
            ],
            onFinish: function()
            {
                gameInventory.addItem(gameItems.itemFactory.bread,3);
                gameInventory.addItem(gameItems.itemFactory.cookies,5);
                gameInventory.addItem(gameItems.itemFactory.beer,2);
                gameProgress.getProgressStateByName("AfterHill").currentState = true;
            }
        },
		openingSafe: 
        {
            isActive: false,
            isFinished :false,
            parts: [
                {
                    isPosted: false,
                    text: "Ihr schaut euch den Safe näher an. Auf dem Safe ist ein bekanntes Tastenfeld zu erkennen...\n https://i.imgur.com/XuM8GCN.jpeg \n"
						    + "In dem Körbchen waren nicht nur gute Items dabei, sondern auch ein Zettel auf dem ein Wort steht:\n"
						    + "\n“socialgaming”\n"
                            + "\n(Zum eingeben des Codes, das Command '!SAFE [Code]' eingeben!)\n"
                        
                },
                {
                    isPosted: false,
                    text: "Ihr wechselt den Handyakku ohne große Komplikationen. Laut der Karte gibt es etwas am Fuße des Berges zu entdecken.\n"
						    + "In der Hoffnung auf einen Durchbruch in euerer Reise beschließt ihr der Schatzkarte zu folgen\n"
						    + "Was euch wohl am Ende der Schatzsuche erwartet?\n"
                            + "\nWechselt nun bitte in den Ruin-Channel!"  
                },
                
            ],
            onFinish: function()
            {
                gameProgress.getProgressStateByName("OpenedSafe").currentState = true;
            }
        },
		doingRuin: 
        {
            isActive: false,
            isFinished :false,
            parts: [
                {
                    isPosted: false,
                    text: "Nach langem Fußmarsch entdeckt ihr dem Eingang einer Ruine. Ihr nehmt euch eine Fackel und beginnt die Dunkle Ruine zu erkunden.\n"
						 +"Ihr entdeckt eine Tür... Sie ist versperrt.\n https://imgur.com/ZJAyXGt \n"
						 +"Was wollt ihr tun?"
						
                },
                {
                    isPosted: false,
                    text:"Ihr seht einen Weg in Richtung des Mountains und entdeckt ein Schild mit der Aufschrift 'Voll Krasser Lift'.\n"
                            +"Ihr beschließt euch dem Schild zu folgen und begegnet einem Gnomen.\n\n"
                            +"“Hallo ihr da! Möchtet ihr auf den Mountain und die schöne Aussicht sehen? \n"
                            +"Es ist wirklich einmalig da oben! Ich biete euch an meinen Lift zu benutzen! \n\n"
                            +"Ich habe allerdings Fragen an euch auf diesem Blatt notiert: https://forms.gle/j1zMmc2DuDssxJtV9 \n\n"
                            +"Jede Antwort gibt euch einen Buchstaben! \n"
                            +"Notiert euch die Reihenfolge!\n"
                            +"Gibt mir mit “!Quiz [Codewort]” die Lösung.”\n"
                            +"Der Alte Gnom setzt sich auf ein Weinfass und summt wartend vor sich her."
                },
                
            ],
            onFinish: function()
            {
                gameProgress.getProgressStateByName("AfterRuin").currentState = true;
            }
        },
		doingQuiz: 
        {
            isActive: false,
            isFinished :false,
            parts: [
                {
                    isPosted: false,
                    text: "'Glückwunsch! Bisher hat noch niemand meine Rätsel gelöst. \n"
					        +"Allerdings seid ihr auch die ersten die hier lang kommen. \n"
					        +"Naja viel Spaß da oben!'Ihr steigt in den Lift ein und braucht eine ganze Stunde bis ihr am Gipfel ankommt. \n"
					        +"In der Zwischenzeit befestigt ihr die Antenne am Handy und überlegt, wie ihr wohl gerettet werdet.\n"
                            +"Wechselt nun in den Mountain-Channel!\n"
                },
                
            ],
            onFinish: function()
            {
                gameProgress.getProgressStateByName("AfterQuiz").currentState = true;
            }
        },
		finishGame: 
        {
            isActive: false,
            isFinished :false,
            parts: [
                {
                    isPosted: false,
                    text: "Oben angekommen, öffnen sich die Türen des Lifts.\n"
					        +"Ein kalter Wind bläst euch entgegen und das Lichtblendet euch. \n"
					        +"Nach paar Minuten habt ihr euch an das Licht gewöhnt. \n"
					        +"Der Ausblick ist traumhaft!\n\nNotiz: Die Autoren haben kein gutes Foto gefunden, deswegen stell euch bitte eine “traumhafte” Landschaft vom Berg aus gesehen vor.Ihr habt es geschafft!\n" 
					        +"Aber nur fast. Nun das Signal senden!\n"
                            +commandPromptNext,
                },
                {
                    isPosted: false,
                    text: "Voller Vorfreude endlich aus diesem Verdammten Walt zu kommen schaut ihr auf die Empfangsbalken des Nokia, um zu erkennen ob der Empfang endlich da ist und sich die Strapazen gelohnt haben.\n"
                            +"UND……Es passiert nichts.\n"
                            +"Das verdammte Mistding zeigt keine Veränderung. War wohl ne kack Idee auf ein Handy von vor 20 Jahren zu vertrauen.\n"
                            +"Hätte man auch selber draufkommen können.\n"
                            +"Ihr fragt euch, wieso zum Teufel ihr diesen ganzen Quatsch machen musstet, nur um am Ende noch Enttäuschter zu sein.\n"
                            +"Während bei eurer Gruppe depressive Zustände herrschen, hört ihr ein lautes “EXTREME TERROR”, gefolgt von massivem Bass in der Ferne.\n\n"
                            +"“Was geht meine Dudes, ich komm euch abholen.”, rief Gandalf mit seiner Stoner-Stimme.\n"
                            +"Im Schein der Untergehenden Sonne seht ihr wie hinter ihm eine Kolonne von Riesen-Adlern auf euch zugeflogen kommt.\n"
                            +"Auf dem Adler neben Gabba Gandalf erkennt ihr eine weitere bekannte Person… Den Busfahrer! Dieser grinst von einer Backe zur anderen.\n"
                            +"Als er näher kam bemerkt ihr, dass er ziemlich high ist und komisch riecht. Ob er auch im Wald war?\n"
                            +"Naja egal. Ihr akzeptiert einfach das ihr von den Stonern vollkommen verarscht wurdet, steigt allesamt auf die Adler und fliegt mit denen in Richtung Sonnenuntergang.\n"
                            +"Der Busfahrer gibt euch eure Smartphones zurück.\n\n"
                            +"“Ich hoffe ihr hattet alle einen freshen Ausflug! Tut mir leid, aber als ich Gandalf sah, wusste ich, dass ich unbedingt mit ihm einen Puffen musste. Hab mich zum Gandalf gebeamt um die Vögel zu holen, leider wurde ich etwas aufgehalten… :)”\n\n"
                            +"Seine Entschuldigung wurde durch eine riesige Explosion unterbrochen.\n"
                            +"Ihr dreht euch um und seht einen riesigen Krater, wo vorher der Wald vorzufinden war.\n https://imgur.com/0dBkh7Z \n"
                            + commandPromptNext	
                },
                {
                    isPosted: false,
                    text:"Vielen Dank für das spielen dieses Spiels. \n"
                            +"Wir hoffen Ihr hattet Spaß und konntet ein wenig über unsere dummen Witze Lachen.\n"
                            +"In kürze (2 Minuten) wird der Server resettet.\n" 
                            +"Danach könnt Ihr das Spiel erneut spielen (oder auch nicht) oder Platz für eine andere Gruppe zum Testen machen. \n"
                            +"Bis dann!"	
                },
                
            ],
            onFinish: function()
            {
                gameProgress.getProgressStateByName("GameFinished").currentState = true;
            }
        },
        toArray: function()
        {
            return [
                this.crashWelcome,
                this.forestPath,
                this.cabinWelcome,
                this.bridgePuzzle,
                this.hillPath,
                this.openingSafe,
                this.doingRuin,
                this.doingQuiz,
                this.finishGame
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
            if(gameProgress.getProgressStateByName("AfterCrash").currentState === false)
            {
                return this.storyBits.crashWelcome;
            }
        }
        else if(channelId === gameChannels.channelFactory.cabin.id)
        {
            if(gameProgress.getProgressStateByName("MetGandalf").currentState === false)
            {
                return this.storyBits.cabinWelcome;
            }
        }
        else if(channelId === gameChannels.channelFactory.forest.id)
        {
            if(gameProgress.getProgressStateByName("ForestPathDone").currentState === false)
            {
                return this.storyBits.forestPath;
            }
            else
            {
                if(gameProgress.getProgressStateByName("FinishedBridgePuzzle").currentState === false 
                && gameProgress.getProgressStateByName("MetGandalf").currentState === true)
                {
                    return this.storyBits.bridgePuzzle;
                }
            }
        }
        else if(channelId === gameChannels.channelFactory.hill.id)
        {
            if(gameProgress.getProgressStateByName("AfterHill").currentState === false)
            {
                return this.storyBits.hillPath;
            }
            else if(gameProgress.getProgressStateByName("OpenedSafe").currentState === false)
            {
                return this.storyBits.openingSafe;
            }

        }
        else if(channelId === gameChannels.channelFactory.ruin.id)
        {
            if(gameProgress.getProgressStateByName("AfterRuin").currentState === false)
            {
                return this.storyBits.doingRuin;
            }
            else if(gameProgress.getProgressStateByName("AfterQuiz").currentState === false)
            {
                return this.storyBits.doingQuiz;
            }
        }
        else if(channelId === gameChannels.channelFactory.mountain.id)
        {
            if(gameProgress.getProgressStateByName("GameFinished").currentState === false)
            {
                return this.storyBits.finishGame;
            }
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