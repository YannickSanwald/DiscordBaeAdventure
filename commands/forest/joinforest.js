module.exports = {
	name: 'joinforest',
	description: 'Assign user to the forest group.',
	execute(message, args) {
        if (args) message.guild.members.cache.get(message.author.id).roles.add(role);
	},
};