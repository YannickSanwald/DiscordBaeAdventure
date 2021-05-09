module.exports = {
	name: 'joinforest',
	description: 'Assign user to the forest group.',
	execute(message, args) {
		let args = message.member.guild.roles.cache.find(args => role.name === "your role");
        if (args) message.guild.members.cache.get(message.author.id).roles.add(role);
	},
};