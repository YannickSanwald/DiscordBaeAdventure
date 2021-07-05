const gameProgress = require('../../gameLogic/GameStoryProgress.js');
const gameChannels = require('../../gameLogic/GameChannels.js');
const roleClaims = require('../../gameLogic/RoleClaim.js');

module.exports = {
	name: 'hill',
	description: 'Allows Player to enter hill channel after loading/walking time!',
	execute(message) {
		const channelId = message.channel.id;

		if(channelId === gameChannels.channelFactory.forest.id)
		{
            if(gameProgress.getProgressStateByName("FinishedBridgePuzzle").currentState === true)
			{
                const userTemp = message.guild.members.cache.get(message.author.id);
                const hillRole = roleClaims.allFunctionalityRoles.find(role => role.name === "Hill");
                console.log(userTemp.roles.add(hillRole.id));
			}
		}
	},
};