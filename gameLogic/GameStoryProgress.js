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
    }
}