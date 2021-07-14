const gameItems = require('../../gameLogic/GameItem.js')

module.exports = {
	name: 'use',
	description: 'Allows using GameItems.',
	execute(message,args) {
        if(!args.length)
        {
            console.log("No arguments given");
            return message.channel.send("No arguments given");
        }

        const allItems = gameItems.getAllItems();
        for(let i = 0; i < allItems.length;i++)
        {
            if(allItems[i].name === args[0])
            {
                return message.channel.send(`Success! Trying to consume object ${args[0]}`);
            }
        }
        return message.channel.send('No such item found!');
	},
};