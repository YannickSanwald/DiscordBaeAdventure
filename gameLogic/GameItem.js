module.exports = {
    itemFactory : {
        water : {
            name: 'water',
            description: 'Looks clean. Do not waste it!\nEnergy +10 on use',
            Execute: function()
            {
                console.log(`Used ${this.name}`);
            }
        },
        fish : {
            name: 'fish',
            description: 'Some raw fish. This isnt sushi, you should cook it first!\nEnergy -10 on use',
            Execute: function()
            {
                console.log(`Used ${this.name}`);
            },
            Cook: function()
            {
                console.log(`Cooked ${this.name}`);
            }
        },
        cookedFish:
        {
            name: 'cooked fish',
            description: 'Some cooked fish. Looks extra tasty, watch out for the bones!\nEnergy +20 on use',
            Execute: function()
            {
                console.log(`Used ${this.name}`);
            }
        },
        berries: {
            name: 'berries',
            Execute: function()
            {
                console.log(`Used ${this.name}`);
            }
        },
        wood: {
            name: 'wood',
            Execute: function()
            {
                console.log(`Used ${this.name}`);
            }
        }
    },

    getAllItems : function() 
    {
        return [
            this.itemFactory.water,
            this.itemFactory.fish,
            this.itemFactory.cookedFish,
            this.itemFactory.berries,
            this.itemFactory.wood,
        ]
    },

    allCookingItems : function()
    {
        return [
            this.itemFactory.fish,
        ]
    },

    getItemByName : function(itemName)
    {
        const allItems = this.getAllItems();
        for(let i = 0; i < allItems.length;i++)
        {
            if(itemName === allItems[i].name)
            {
                return allItems[i];
            }
        }

        return null;
    }
}
