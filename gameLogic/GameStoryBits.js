const gameProgress = require('./GameStoryProgress.js');

const OPTION_NEXT = "!NEXT";
const OPTION_YES = "!YES";
const OPTION_NO = "!NO";

module.exports = {
    storyBits : {
        crashWelcome: 
        {
            options: [OPTION_NEXT],
            parts: [
                {
                    isPosted: false,
                    value: "Was für ein schöner Tag. Ihr und eure Kommilitonen aus der Uni dachtet: \n"
                    + "\"Was für ein Spaß! Lasst uns doch an diesem Camp-Adventure im Wald teilnehmen\“\n." 
                    +"Eine ganze Woche weg von Stress und Hektik aus dem Alltag. Ihr freut euch, unterhaltet euch"
                    +"und plötzlich ist der Spaß vorbei. Der Bus bleibt liegen. Es ist gerade 18 Uhr, die Dämmerung hat begonnen.\n" 
                    +`\n\n(Bitte jede Person einmal ${OPTION_NEXT} eingeben!)`
                },
                {
                    isPosted: false,
                    value: "'Heheheheheheheeeee.....Ich möchte ein Spiel mit Euch spielen!!'\n\n" +
                    "Ihr seid verwirrt. Ist das... Echt jetzt?! Die Jigsaw-Puppe!? Er hebt mit seinem Fahrrad vom Boden ab und schwebt auf die Motorhaube des Busses.\n"
                    +"'Heheheheheee... Ich heiße Euch herzlich Willkommen auf meinem neuen Grundstück! Gerade wurde mir schon langweilig und ich wollte auf die Suche nach Opfern gehen. Wunderschön, dass ich Euch gefunden habe! Ihr habt 72 Stunden Zeit aus diesem Wald zu kommen - oder ihr werdet sterben! In 72 Stunden wird hier alles zu Boden gerodet, weil mein neues Schlachthaus hier gebaut wird. Ich feiere dies mit einem wunderschönen Bomben-Feuerwerk! Nichts geht schneller! Heheheheheheeee... Vielleicht könnt ihr es schaffen. Viel Spaß!'\n\n"
                    +"Weg war er. Manche von euch haben versucht ihn mit dem Handy zu filmen, jedoch sind diese verschwunden. Auch die anderen, die aus dem Schock kommen, suchen ihre Handys... vergebens. Ihr schaut euch gegenseitig an. Jeder von euch denkt dasselbe: “WTF?."
                    `\n\n(Bitte eine Person einmal ${OPTION_NEXT} eingeben!)`
                },
                {
                    isPosted: false,
                    value: "Ihr wollt den Busfahrer fragen, wie weit das Camp noch entfernt ist, doch wo ist er? Ihr steigt aus dem Bus und schaut herum… Nichts anderes als der Waldweg und Bäume. Viele Bäume. Wo sind wir nochmal...? Ihr ruft nach ihm… Nichts. Ein paar rufen weiter und die andere Hälfte durchsucht den Bus. Es muss doch bestimmt ein Notruftelefon hier sein... Nichts. Hier seid Ihr und müsst einen Weg aus diesem Wald finden, in dem Ihr gestrandet seid." 
                    + `\n\n(Bitte eine Person einmal ${OPTION_NEXT} eingeben!)`
                },
                {
                    isPosted: false,
                    value: "Ihr beginnt langsam zu realisieren, dass ihr euch heute nicht mehr von der Crashside wegbewegen werdet. Allgemeine Unruhe macht sich breit. Nun muss etwas getan werden. Ihr bereitet euch für die kommende Nacht vor… Ohje! Ihr habt keine Taschenlampen… Oder Heizungen… Was gibt’s eigentlich zum Futtern? "
                    + "\n\n Achtung: In jedem Discord-Channel gibt es gepinnte Nachrichten! Diese findet ihr rechts oben über den Pin Button. Hier stehen eure Aufgaben, Ziele und Interaktionsmöglichkeiten mit der Welt! Lest euch diese gut durch und gestaltet gemeinsam Strategien, um das Abenteuer zu bestehen."
                }
            ],
        },  
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
        else if(channelId === gameChannels.channelFactory.mountain.id)
        {

        }

        return null;
    },

    toArray: function()
    {
        return [
            this.crashWelcome,
            
        ]
    }
}