const gameChannels = require('../../gameLogic/GameChannels.js');
const gameUsers = require('../../gameLogic/GameUsers.js');
const fire = require('./fire.js');

module.exports = {
	name: 'rest',
	description: 'Ruht euch aus und setzt eure Ausdauer zurück auf 100. (Wartezeit: 4 Stunden)',
	execute(message) {
        const channelId = message.channel.id; 
        const currentUser = gameUsers.getUserByMemberRoles(message.member.roles);


        if(channelId === gameChannels.channelFactory.camp.id)
        {
            if(fire.isFireInCamp == true) {
                currentUser.energy = 100;
                return message.channel.send('Ihr ruht euch neben dem Feuer für mehrere Stunden aus und stellt eure Energie wieder her.')
            } else {
                return message.channel.send('Ihr müsst hier vorher ein Feuer machen bevor ihr euch ausruhen könnt!')
            }
        }   

        if(channelId === gameChannels.channelFactory.cabin.id)
        {
            if(fire.isFireInCabin == true) {
                currentUser.energy = 100;
                return message.channel.send('Ihr ruht euch neben dem Feuer für mehrere Stunden aus und stellt eure Energie wieder her.')
            } else {
                return message.channel.send('Ihr müsst hier vorher ein Feuer machen bevor ihr euch ausruhen könnt!')
            }
        }   
	},

    isChannelValid: function(channelId)
    {
        if(channelId === gameChannels.channelFactory.camp.id
            || channelId === gameChannels.channelFactory.cabin.id)
        {
            return true;
        }

        return false;
    },


    occupationTime : 60000 * 240, // 60000 ms = 1 min * 240 = 240 min = 4h
};