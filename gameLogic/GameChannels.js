const lobbyPin = {
    "title": "Hi!",
    "description": "Schön, dass Ihr entschieden habt, dieses Spiel zu spielen! Dies ist ein kurzes Multi-Player Textadventure-Game.\n"
                    +"Wenn alle da sind, gibt das Kommando “!START” ein. Danach müsst ihr eure Rollen wählen und in den Crash-Channel wechseln, um zu beginnen.\n\n"
                    +"Viel Erfolg!",
    "color": 123335,
    "fields": [{}]
};

const crashPin = {
    "title": "Crashed in a forest...somewhere",
    "description": "Damit die Story startet bitte eine Person tippen (aber nix abschicken).\n"
                    +"Ihr werdet im Laufe der Einleitung erfahren, was ihr in diesem Channel eingeben könnt.",
    "color": 123335,
    "fields": [{}]
};

const campPin = {
    "title": "Hier ein Camp aufbauen!",
    "description": "Folgende Commands könnt ihr ausspielen:",
    "color": 123335,
    "fields": [
        {
            name: '!FIRE ',
            value: 'Feuer machen. ⚡(-10) \n Wood (-10)',
            inline: true,
        },
        {
            name: '!COOK [ITEM]',
            value: 'Kochen. Braucht Feuer. \n Notiz: Nicht alles kann gekocht werden!',
            inline: true,
        },
        {
            name: '!WOOD',
            value: 'Holz hacken. ⚡(-10)',
            inline: true,
        },
        {
            name: '!USE [ITEM]',
            value: 'Etwas aus dem Inventar essen/trinken ⚡(+10)',
            inline: true,
        },
        ,
        {
            name: '!SEARCH',
            value: 'Umgebung nach etwas Nützlichem suchen. ⚡(-30)',
            inline: true,
        },
        {
            name: '!REST',
            value: ' (to-Do) Du bist so zerstört und ruhst dich erstmal aus. \n Braucht Feuer. \n⚡(+10+)',
            inline: true,
        },
    ]
};

const forestPin = {
    "title": "Ihr seid im Wald.",
    "description": "Damit die Story weitergeht bitte eine Person tippen (aber nix abschicken).\n"
                    +"Ihr werdet im Laufe der Story erfahren, was ihr in diesem Channel eingeben könnt.",
    "color": 123335,
    "fields": [{}]
};

const cabinPin = {
    "title": "A nice cabin.",
    "description": "Mögliche COmmands nach der Einleitung:",
    "color": 123335,
    "fields": [
        {
            name: '!FIRE ',
            value: 'Feuer machen. ⚡(-10) \n Wood (-10)',
            inline: true,
        },
        {
            name: '!COOK [ITEM]',
            value: 'Kochen. Braucht Feuer. \n Notiz: Nicht alles kann gekocht werden!',
            inline: true,
        },
        {
            name: '!WOOD',
            value: 'Holz hacken. ⚡(-10)',
            inline: true,
        },
        {
            name: '!USE [ITEM]',
            value: 'Etwas aus dem Inventar essen/trinken ⚡(+10)',
            inline: true,
        },
        ,
        {
            name: '!SEARCH',
            value: 'Umgebung nach etwas Nützlichem suchen. ⚡(-30)',
            inline: true,
        },
        {
            name: '!REST',
            value: ' (to-Do) Du bist so zerstört und ruhst dich erstmal aus. \n Braucht Feuer. \n⚡(+100)',
            inline: true,
        },
        {
            name: '!SMOKE',
            value: ' (to-Do) Du willst mit Gandalf chillen und probierst sein Zeug. \n⚡(+50)',
            inline: true,
        },
    ]
};

const lakePin = {
    "title": "Welcome to the sea-side",
    "description": "Eine schöne Aussicht hier. Folgende Commands gehen:",
    "color": 123335,
    "fields": [
        {
            name: '!WOOD',
            value: 'Holz hacken. ⚡(-10)',
            inline: true,
        },
        {
            name: '!USE [ITEM]',
            value: 'Etwas aus dem Inventar essen/trinken ⚡(+10)',
            inline: true,
        },
        ,
        {
            name: '!SEARCH',
            value: 'Umgebung nach etwas Nützlichem suchen. ⚡(-30)',
            inline: true,
        },
        {
            name: '!FISH',
            value: ' (to-Do) Über dem 🔥 gebraten echt was Leckeres. \n Braucht Feuer. \n⚡(-20)',
            inline: true,
        },
    ]
};

const hillPin = {
    "title": "Ihr seid am Hill angekommen!",
    "description": "Das sind eure Commands:",
    "color": 123335,
    "fields": [
        {
            name: '!FIRE ',
            value: 'Feuer machen. ⚡(-10) \n Wood (-10)',
            inline: true,
        },
        {
            name: '!COOK [ITEM]',
            value: 'Kochen. Braucht Feuer. \n Notiz: Nicht alles kann gekocht werden!',
            inline: true,
        },
        {
            name: '!WOOD',
            value: 'Holz hacken. ⚡(-10)',
            inline: true,
        },
        {
            name: '!USE [ITEM]',
            value: 'Etwas aus dem Inventar essen/trinken ⚡(+10)',
            inline: true,
        },
        ,
        {
            name: '!SEARCH',
            value: 'Umgebung nach etwas Nützlichem suchen. ⚡(-30)',
            inline: true,
        },
        {
            name: '!REST',
            value: ' (to-Do) Du bist so zerstört und ruhst dich erstmal aus. \n Braucht Feuer. \n⚡(+100)',
            inline: true,
        },
    ]
};

const ruinPin = {
    "title": "Willkommen an der Ruine!",
    "description": "Mögliche Commands:",
    "color": 123335,
    "fields": [
        {
            name: '!FIRE ',
            value: 'Feuer machen. ⚡(-10) \n Wood (-10)',
            inline: true,
        },
        {
            name: '!COOK [ITEM]',
            value: 'Kochen. Braucht Feuer. \n Notiz: Nicht alles kann gekocht werden!',
            inline: true,
        },
        {
            name: '!WOOD',
            value: 'Holz hacken. ⚡(-10)',
            inline: true,
        },
        {
            name: '!USE [ITEM]',
            value: 'Etwas aus dem Inventar essen/trinken ⚡(+10)',
            inline: true,
        },
        ,
        {
            name: '!SEARCH',
            value: 'Umgebung nach etwas Nützlichem suchen. ⚡(-30)',
            inline: true,
        },
        {
            name: '!REST',
            value: ' (to-Do) Du bist so zerstört und ruhst dich erstmal aus. \n Braucht Feuer. \n⚡(+100)',
            inline: true,
        },
    ]
};

const mountainPin = {
    "title": "On top of the mountain.",
    "description": "Damit die Story weitergeht bitte eine Person tippen (aber nix abschicken).\n"
                    +"Das Ende naht...",
    "color": 123335,
    "fields": []
};

module.exports = {
    getChannelEmbedPin : function(channelId)
    {
        const allChannels = this.getAllGameChannels();
        for(let i = 0; i < allChannels.length;i++)
        {
            if(channelId === allChannels[i].id)
            {
                const pin = allChannels[i].pin;
                return pin;
            }
        }
    },
        
    channelFactory : {
        lobby : 
        {
            id: '858295242574135316',
            name: 'lobby',
            pin: lobbyPin
        },
        crash:
        {
            id: '855743695731032074',
            name: 'crash',
            pin: crashPin,
        },
        camp:
        {
            id: '856214750820171788',
            name: 'camp',
            pin: campPin,
        },
        forest:
        {
            id: '855743658719707177',
            name: 'forest',
            pin: forestPin,
        },
        cabin:
        {
            id: '858619914897850388',
            name: 'cabin',
            pin: cabinPin,
        },
        lake:
        {
            id: '860413505182498866',
            name: 'lake',
            pin: lakePin,
        },
        hill:
        {
            id: '860413573679284224',
            name: 'hill',
            pin: hillPin,
        },
        ruin:
        {
            id: '860413684274429962',
            name: 'ruin',
            pin:  ruinPin,
        },
        mountain:
        {
            id: '860413774027816960',
            name: 'mountain',
            pin: mountainPin,
        }
    },

    getAllGameChannels : function()
    {
        return [
            this.channelFactory.lobby,
            this.channelFactory.crash,
            this.channelFactory.camp,
            this.channelFactory.forest,
            this.channelFactory.cabin,
            this.channelFactory.lake,
            this.channelFactory.hill,
            this.channelFactory.ruin,
            this.channelFactory.mountain
        ]   
    }
};
