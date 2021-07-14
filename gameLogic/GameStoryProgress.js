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

// ================================= CHAPTER 2 =================================

        {
            name: "ForestPathDone",
            currentState: false,
        },
        {
            name: "MetGandalf",
            currentState: false,
        },
        {
            name: "FinishedBridgePuzzle",
            currentState: false,
        },
        {
            name: "FoundKey",
            currentState: false,
        },

// ================================= CHAPTER 3 =================================

        {
            name: "AfterHill",
            currentState: false,
        },
        {
            name: "OpenedSafe",
            currentState: false,
        },
        {
            name: "OpenedDoor",
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

    resetStoryProgress: function()
    {
        for(let i = 0; i < this.progressStates.length;i++)
        {
            this.progressStates[i].currentState = false;
        }
    }

}