const lobbyPin = {
    "title": "Welcome Message",
    "description": "Ich bin die Lobby Welcome Nachricht! Hallo!",
    "color": 123335,
    "fields": [{}]
};

const crashPin = {
    "title": "Crashed in a forest...somewhere",
    "description": "Hier steht die Message für den Crash des Spiels",
    "color": 123335,
    "fields": [{}]
};

const campPin = {
    "title": "We build a camp... now what?",
    "description": "Hier steht die Message für das Camps",
    "color": 123335,
    "fields": []
};

const forestPin = {
    "title": "Crashed in a forest...somewhere",
    "description": "Hier steht die Message für den Wald",
    "color": 123335,
    "fields": [{}]
};

const cabinPin = {
    "title": "A nice cabin.",
    "description": "Hier steht die Message für die Hütte",
    "color": 123335,
    "fields": []
};

const lakePin = {
    "title": "Welcome to the sea-side",
    "description": "Hier steht die Message für den Lake",
    "color": 123335,
    "fields": []
};

const hillPin = {
    "title": "Crashed in a forest...somewhere",
    "description": "Hier steht die Message für den Hill",
    "color": 123335,
    "fields": [{}]
};

const ruinPin = {
    "title": "Crashed in a forest...somewhere",
    "description": "Hier steht die Message für die Ruine",
    "color": 123335,
    "fields": []
};

const mountainPin = {
    "title": "On the mountain",
    "description": "Hier steht die Message für den Mountain",
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
