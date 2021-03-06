module.exports = {
    allGameRoles : [
        {
            id: '856187257639010326',
            name: 'Informatiker',
            emoji: 'π§π»βπ»',
        },
        {
            id: '856187347891388437',
            name : 'Biologe', 
            emoji: 'π§π»βπ¬',
        },
        {
            id: '856187403824136213',
            name: 'Ingenieur',
            emoji: 'π§π»βπ§',
        },
        {
            id: '856187471107850270',
            name: 'Mediziner',
            emoji: 'π§π»ββοΈ',
        },
        {
            id: '856187512628314166',
            name: 'Sportler',
            emoji: 'π€Έπ»',
        },
        {
            id: '856187543459987507',
            name: 'Jurist',
            emoji: 'π§π»ββοΈ',
        }
    ],

    allFunctionalityRoles : [
        {
            id: '860447864336678923',
            name: 'Player',
            emoji: 'NONE',
        },
        {
            id: '860448361806954507',
            name : 'Crash', 
            emoji: 'π₯',
        },
        {
            id: '860448853475721236',
            name: 'Camp',
            emoji: 'ποΈ',
        },
        {
            id: '860448904477540353',
            name: 'Forest',
            emoji: 'π²',
        },
        {
            id: '860448941749043220',
            name: 'Clearing',
            emoji: 'π',
        },
        {
            id: '860449041350393866',
            name: 'Cabin',
            emoji: 'ποΈ',
        },
        {
            id: '860449151165923358',
            name : 'Lake', 
            emoji: 'π',
        },
        {
            id: '860449187522150410',
            name: 'Hill',
            emoji: 'β°οΈ',
        },
        {
            id: '860449273152667678',
            name: 'Ruin',
            emoji: 'βοΈ',
        },
        {
            id: '860449335685939201',
            name: 'Mountain',
            emoji: 'ποΈ',
        }
    ],

    hasAnybodyRoleExceptUser: function(members, user, role)
    {
        // gehe durch server member
        // checke ΓΌber die ID obs der User ist, falls ja -> continue
        for(const [memberId,member] of members.entries() )
        {
            if(user.id ===memberId)
            {
                continue;
            }

            if(member.roles.cache.has(role.id))
            {
                return true;
            }       
        }
        
        return false;
    },

    hasUserRole : function (user, role)
    {
        if(user.roles.cache.has(role.id))
        {
            return true;
        } 
        return false;
    },

    hasUserGameRole : function(user)
    {
        for(let i = 0; i < this.allGameRoles.length;i++)
        {
            if(this.hasUserRole(user, this.allGameRoles[i]))
            {
                return true;
            }
        }
        return false;
    },

    removeUserGameRoles: function(user)
    {
        for(let i = 0; i < this.allGameRoles.length; i++)
        {
            user.roles.remove(this.allGameRoles[i].id);
        }
    },

    getRoleById: function(roleId)
    {
        for(let i = 0; i < this.allGameRoles.length;i++)
        {
            if(roleId === this.allGameRoles[i].id)
            {
                return this.allGameRoles[i];
            }
        }
    },
}