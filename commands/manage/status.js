const gameUsers = require('../../gameLogic/GameUsers.js');

module.exports = {
	name: 'status',
	description: 'Shows the current status of the player',
	execute(message) {
        const currentUser = gameUsers.getUserByMemberRoles(message.member.roles);

        if(currentUser === null)
        {
            return message.channel.send("Du kannst das Kommando 'status' nicht ausführen, solange das Spiel nicht gestartet ist.");
        }

        return message.channel.send(`Spieler ${message.author.username} hat folgenden Status:\n`
            + `Rolle: ${currentUser.role}\nEnergie: ${currentUser.energy}`);
    },
}