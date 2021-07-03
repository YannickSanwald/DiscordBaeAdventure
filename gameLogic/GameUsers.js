// occupationTimeStamp is the time, the player is free to do another action!
// e.g currentTime > occupationTImeStamp -> player can execute an action

module.exports = {
    users:[
        {
            userId: '',
            roleId: '856187257639010326',
            role: 'Informatiker',
            energy: 100,
            occupationTimeStamp: 0,
        },
        {
            userId: '',
            roleId: '856187347891388437',
            role : 'Biologe', 
            energy: 100,
            occupationTimeStamp:0,
        },
        {
            userId: '',
            roleId: '856187403824136213',
            role: 'Ingenieur',
            energy: 100,
            occupationTimeStamp:0,
        },
        {
            userId: '',
            roleId: '856187471107850270',
            role: 'Mediziner',
            energy: 100,
            occupationTimeStamp:0,
        },
        {
            userId: '',
            roleId: '856187512628314166',
            role: 'Sportler',
            energy: 100,
            occupationTimeStamp:0,
        },
        {
            userId: '',
            roleId: '856187543459987507',
            role: 'Jurist',
            energy: 100,
            occupationTimeStamp:0,
        },
    ],    
    

    getUserByMemberRoles: function(memberRoles)
    {
        for(let i = 0; i < this.users.length;i++)
        {
            if(memberRoles.cache.has(this.users[i].roleId))
            {
                return this.users[i];
            }
        }

        return null;
    },

    getUserByMemberRoleId: function(roleId)
    {
        for(let i = 0; i < this.users.length;i++)
        {
            if(this.users[i].roleId === roleId)
            {
                return this.users[i];
            }
        }
    },

    isUserOccupied: function(userId, currentTime)
    {
        for(let i = 0; i < this.users.length;i++)
        {
            if(this.users[i].userId === userId)
            {
                if(currentTime >= this.users[i].occupationTimeStamp)
                {
                    return lfalse;
                }
                return true;
            }
        }

        console.error("userId not found in GameUsers!");
    },

    areAllUsersReadyToPlay: function()
    {
        for(let i = 0; i <this.users.length;i++)
        {
            if(this.users[i].userId === '')
            {
                return false;
            }
        }
        return true;
    }
}