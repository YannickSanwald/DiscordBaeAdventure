const gameChannels = require('../../gameLogic/GameChannels.js');
const gameUsers = require('../../gameLogic/GameUsers.js');

module.exports = {
	name: 'smoke',
	description: 'Macht von Gabba Gandalfs großzügigem Lager gebrauch um euch etwas zu entspannen. (Wartezeit: 1 Stunde)',
	execute(message) {
        const channelId = message.channel.id; 
        const currentUser = gameUsers.getUserByMemberRoles(message.member.roles);


        if(channelId === gameChannels.channelFactory.cabin.id)
        {
            currentUser.energy = currentUser.energy + 50;
            return message.channel.send('Ihr schnappt euch ein bisschen von Gandalfs Stoff und entspannt euch für eine Weile.')
        }
	},

    isChannelValid: function(channelId)
    {
        if(channelId === gameChannels.channelFactory.cabin.id)
        {
            return true;
        }

        return false;
    },


    occupationTime : 60000 * 60, // 60000 ms = 1 min * 60 = 60 min = 1h
};