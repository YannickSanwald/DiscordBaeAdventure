const gameItems = require('../../gameLogic/GameItem.js')
const gameInventory = require('../../gameLogic/GameInventory.js');

module.exports = {
	name: 'cook',
	description: 'Allows combining GameItems to cook some meals.',
	execute(message,args) {
        if(!args.length)
        {
            console.log("No arguments given");
            return message.channel.send("No arguments given.\n"
            +"You have to name item(s) which should be cooked (or combined to cook).\n"
            +"e.g. !cook fish => cooked fish\n !cook buns burger cheese => Cheeseburger");
        }
        

        const allItems = gameItems.allCookingItems();
        for(let i = 0; i < allItems.length;i++)
        {
            if(allItems[i].name === args[0])
            {
                if(gameInventory.hasItems(allItems[i]))
                {
                    gameInventory.removeItem(allItems[i]);
                    const cookedItem = this.cookingFactory(allItems[i].name);
                    return message.channel.send(`Success! You cooked ${allItems[i].name} and got:`
                    + cookedItem.name);
                }
                else
                {
                    return message.send(`You don't have any ${allItems[i].name} in your inventory!`);
                }
            }
        }

        return message.channel.send('No such item found!');
	},

    cookingFactory: function(itemName)
    {
        if(itemName === gameItems.itemFactory.fish.name)
        {
            return gameItems.itemFactory.cookedFish;
        }
    },
};