module.exports = {
    itemFactory : {
        water : {
            name: 'water',
            description: 'Looks clean. Do not waste it!\nEnergy +10 on use',
            Execute: function(userId, channelId)
            {
                console.log(`Used ${this.name}`);
            }
        },
        fish : {
            name: 'fish',
            description: 'Some raw fish. This isnt sushi, you should cook it first!\nEnergy -10 on use',
            Execute: function(userId, channelId)
            {
                console.log(`Used ${this.name}`);
            },
        },
        cookedFish:
        {
            name: 'cooked fish',
            description: 'Some cooked fish. Looks extra tasty, watch out for the bones!\nEnergy +20 on use',
            Execute: function(userId, channelId)
            {
                console.log(`Used ${this.name}`);
            }
        },
        berries: {
            name: 'berries',
            Execute: function(userId, channelId)
            {
                console.log(`Used ${this.name}`);
            }
        },
        wood: {
            name: 'wood',
            Execute: function(userId, channelId)
            {
                console.log(`Used ${this.name}`);
            }
        },
        cookies: {
            name: 'cookies',
            Execute: function(userId, channelId)
            {
                console.log(`Used ${this.name}`);
            }
        },
        bread: {
            name: 'bread',
            Execute: function(userId, channelId)
            {
                console.log(`Used ${this.name}`);
            }
        },
        herbs: {
            name: 'herbs',
            description: 'Some herbs. Not tasty to eat like that, make a paste by cooking it!\nEnergy -10 on use',
            Execute: function(userId, channelId)
            {
                console.log(`Used ${this.name}`);
            },
        },
        cookedHerbs:
        {
            name: 'herbal paste',
            description: 'Some cooked herbs. Has great healing effects and is good for the skin!\nEnergy +20 on use',
            Execute: function(userId, channelId)
            {
                console.log(`Used ${this.name}`);
            }
        },
        oats: {
            name: 'oats',
            Execute: function(userId, channelId)
            {
                console.log(`Used ${this.name}`);
            },
        },
        cookedOats:
        {
            name: 'oatmeal',
            description: 'Some cooked oats. Great for breakfast, keeps you full!\nEnergy +20 on use',
            Execute: function(userId, channelId)
            {
                console.log(`Used ${this.name}`);
            }
        },
        corn:
        {
            name: 'Maiskolben',
            description: 'Ein Maiskolben. Ziemlich gelb!\nEnergy +20 on use',
            Execute: function(userId, channelId)
            {
                console.log(`Used ${this.name}`);
            }
        },
        beer:
        {
            name: 'Bier',
            description: 'Ein Bier. Orignal nach Deutschem Reinheitsgebot!\nEnergy +20 on use',
            Execute: function(userId, channelId)
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
            this.itemFactory.cookies,
            this.itemFactory.bread,
            this.itemFactory.herbs,
            this.itemFactory.cookedHerbs,
            this.itemFactory.oats,
            this.itemFactory.cookedOats,
            this.itemFactory.corn,
            this.itemFactory.beer,
        ]
    },

    allCookingItems : function()
    {
        return [
            this.itemFactory.fish,
            this.itemFactory.herbs,
            this.itemFactory.oats,
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
