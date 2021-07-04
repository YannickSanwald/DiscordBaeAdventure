const gameItems = require('../../gameLogic/GameItem.js')
const gameInventory = require('../../gameLogic/GameInventory.js');
const gameChannels = require('../../gameLogic/GameChannels.js');
const fire = require('./fire.js');

const fireHelpString = "\nUm ein Feuer zu machen, gibt den Befehl !FIRE ein!".

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
        
        const channelId = message.channel.id;


        if(channelId === gameChannels.channelFactory.camp)
        {
            if(fire.isFireInCamp.value === true)
            {
                return cookItem(args[0])
            }
            else
            {
                return message.channel.send("Ihr habt kein Feuer im Camp gemacht." + fireHelpString);
            }
        }
        else if(channelId=== gameChannels.channelFactory.hill)
        {
            if(fire.isFireInHill.value === true)
            {
                return cookItem(args[0])
            }
            else
            {
                return message.channel.send("Ihr habt kein Feuer am Hill gemacht." + fireHelpString);
            }
        }
        else if(channelId=== gameChannels.channelFactory.ruin)
        {
            if(fire.isFireInRuin.value === true)
            {
                return cookItem(args[0])
            }
            else
            {
                return message.channel.send("Ihr habt kein Feuer an der Ruin gemacht." + fireHelpString);
            }
        }
	},

    cookItem: function()
    {
        const allItems = gameItems.allCookingItems(itemName);
        for(let i = 0; i < allItems.length;i++)
        {
            if(allItems[i].name === itemName)
            {
                if(gameInventory.hasItems(allItems[i]))
                {
                    const cookedItem = this.cookingFactory(allItems[i].name);
                    gameInventory.removeItem(allItems[i]);
                    gameInventory.addItem(cookedItem);
                    return message.channel.send(`Success! You cooked ${allItems[i].name} and got:`
                    + cookedItem.name);
                }
                else
                {
                    return message.send(`You don't have any ${allItems[i].name} in your inventory!`);
                }
            }
        }

        return message.channel.send(`Es gibt in diesem Spiel keinen kochbaren Gegenstand namens ${itemName}!`);
    },

    cookingFactory: function(itemName)
    {
        if(itemName === gameItems.itemFactory.fish.name)
        {
            return gameItems.itemFactory.cookedFish;
        }
    },
};