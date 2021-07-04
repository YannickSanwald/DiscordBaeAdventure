module.exports = {
    items : [],
    addItem : function(item,amount)
    {
        if(isNaN(amount) || amount < 1)
        {
            amount = 1;
        }

        for(let i = 0; i < amount; i++)
        {
            this.items.push(item);
        }
    },
    removeItem : function(item, amount)
    {
        if(isNaN(amount) || amount < 1)
        {
            amount = 1;
        }

        for(let i = 0; i < amount;i++)
        {
            const index = this.items.indexOf(item);
            if(index > -1)
            {
                this.items.splice(index,1);
            }
        }
    },
    hasItems : function(item, amount)
    {
        if(isNaN(amount) || amount < 0)
        {
            console.error("You cant check an amount in the inventory with a value smaller 0");
            return false;
        }

        let counter = 0;
        for(let i = 0; i < this.items.length;i++)
        {
            if(this.items[i].name === item.name)
            {
                counter++;
                if(counter >= amount)
                {
                    return true;
                }
            }
        }  
        return false;
    },
    resetInventory : function()
    {
        this.items = [];
    }
}