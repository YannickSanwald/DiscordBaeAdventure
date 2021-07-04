module.exports = {
    itemFactory : {
        water : {
            name: 'water',
            description: '🥤 Sieht clean aus.\nEnergy +10 on use',
            Execute: function(userId, channelId)
            {
                console.log(`Used ${this.name}`);
            }
        },
        fish : {
            name: 'fish',
            description: '🐟 Roher Fisch. Aber nicht für Sushi geeignet, koch den zuerst!',
            Execute: function(userId, channelId)
            {
                console.log(`Used ${this.name}`);
            },
        },
        cookedFish:
        {
            name: 'cooked fish',
            description: '🍤 Gekochter Fisch. Sieht lecker aus, pass auf Gräten auf!\nEnergy +20 bei use',
            Execute: function(userId, channelId)
            {
                console.log(`Used ${this.name}`);
            }
        },
        berries: {
            name: 'berries',
            description: '🍓 Ein paar Beeren. Sowohl roh als auch gekocht ein Genuss.\nEnergy +5 bei use',
            Execute: function(userId, channelId)
            {
                console.log(`Used ${this.name}`);
            }
        },
        cookedBerries:
        {
            name: 'berry sirup',
            description: '🍷 Gekochte Beeren. Süßer Sirup mit heilenden Effekten!\nEnergy +20 bei use',
            Execute: function(userId, channelId)
            {
                console.log(`Used ${this.name}`);
            }
        },
        wood: {
            name: 'wood',
            description:'🥢 Etwas Holz. Gut geeignet für ein Feuer.',
            Execute: function(userId, channelId)
            {
                console.log(`Used ${this.name}`);
            }
        },
        cookies: {
            name: 'cookie',
            description:'🍪 Keks! Geil!\nEnergy +10 bei use',
            Execute: function(userId, channelId)
            {
                console.log(`Used ${this.name}`);
            }
        },
        bread: {
            name: 'bread',
            description:'🍞 Etwas Brot. Macht gut satt.\nEnergy +10 bei use',
            Execute: function(userId, channelId)
            {
                console.log(`Used ${this.name}`);
            }
        },
        herbs: {
            name: 'herbs',
            description: '🌿 Ungenießbare Kräuter. Die musst du zuerst kochen!',
            Execute: function(userId, channelId)
            {
                console.log(`Used ${this.name}`);
            },
        },
        cookedHerbs:
        {
            name: 'herbal tea',
            description: '🍵 Gekochte Kräuter. Eine Tasse Tee tut immer gut!\nEnergy +20 bei use',
            Execute: function(userId, channelId)
            {
                console.log(`Used ${this.name}`);
            }
        },
        oats: {
            name: 'oats',
            description:'🌾 Handvoll Hafer. Kann man so essen, muss man aber nicht... Gekocht schmecken die wesentlich besser.\nEnergy +2 bei use',
            Execute: function(userId, channelId)
            {
                console.log(`Used ${this.name}`);
            },
        },
        cookedOats:
        {
            name: 'oatmeal',
            description: '🍚 Warmer Haferbrei. Damit bist du eine Zeit lang satt!\nEnergy +30 on use',
            Execute: function(userId, channelId)
            {
                console.log(`Used ${this.name}`);
            }
        },
        corn:
        {
            name: 'Maiskolben',
            description: '🌽 Ein Maiskolben. Die Körner kommen genau so raus wie sie rein kamen!\nEnergy +5 on use',
            Execute: function(userId, channelId)
            {
                console.log(`Used ${this.name}`);
            }
        },
        beer:
        {
            name: 'Bier',
            description: '🍺 Ein Bier. Orignal nach Deutschem Reinheitsgebot!\nEnergy +20 on use',
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
