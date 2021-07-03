const gameChannels = require('./GameChannels');

module.exports = {
    progressStates : [
        {
            name: "AfterCrash",
            currentState: false,
        },
        {
            name: "TwoPlayersVisitedForest",
            currentState: false,
        },
        {
            name: "MadeFire",
            currentState: false,
        },
        {
            name: "MadeBed",
            currentState: false,
        },
        {
            name: "SearchedBus",
            currentState: false,
        },
        {
            name: "FirstNightOver",
            currentState: false,
        },
        {
            name: "ForestPathDone",
            currentState: false,
        },
        {
            name: "MetGandalf",
            currentState: false,
        },
        {
            name: "MetStonedGroup",
            currentState: false,
        },
        {
            name: "FinishedBridgePuzzle",
            currentState: false,
        },
        {
            name: "AfterHill",
            currentState: false,
        },
        {
            name: "OpenedSafe",
            currentState: false,
        },
        {
            name: "AfterRuin",
            currentState: false,
        },
        {
            name: "AfterQuiz",
            currentState: false,
        },
        {
            name: "GameFinished",
            currentState: false,
        }
    ],

    getProgressStateByName : function(progressName)
    {
        for(let i = 0; i < this.progressStates.length;i++)
        {
            if(this.progressStates[i].name === progressName)
            {
                return this.progressStates[i];
            }
        }
    },

}