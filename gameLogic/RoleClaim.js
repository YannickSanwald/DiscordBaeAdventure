module.exports = {
    allGameRoles : [
        {
            id: '856187257639010326',
            name: 'Informatiker',
            emoji: '🧑🏻‍💻',
        },
        {
            id: '856187347891388437',
            name : 'Biologe', 
            emoji: '🧑🏻‍🔬',
        },
        {
            id: '856187403824136213',
            name: 'Ingenieur',
            emoji: '🧑🏻‍🔧',
        },
        {
            id: '856187471107850270',
            name: 'Mediziner',
            emoji: '🧑🏻‍⚕️',
        },
        {
            id: '856187512628314166',
            name: 'Sportler',
            emoji: '🤸🏻',
        },
        {
            id: '856187543459987507',
            name: 'Jurist',
            emoji: '🧑🏻‍⚖️',
        }
    ],

    allFunctionalityRoles : [
        {
            id: '',
            name: 'Player',
            emoji: 'NONE',
        }
    ],

    hasAnybodyRoleExceptUser: function(members, user, role)
    {
        // gehe durch server member
        // checke über die ID obs der User ist, falls ja -> continue
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