const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	storage: 'database.sqlite',
});

const Users = require('./models/Users')(sequelize, Sequelize.DataTypes);
const ItemList = require('./models/ItemList')(sequelize, Sequelize.DataTypes);
const Inventory = require('./models/Inventory')(sequelize, Sequelize.DataTypes);

Inventory.belongsTo(ItemList, { foreignKey: 'item_id', as: 'item' });

/* eslint-disable-next-line func-names */
Users.prototype.addItem = async function(item) {
	const userItem = await Inventory.findOne({
		where: { user_id: this.user_id, item_id: item.id },
	});

	if (userItem) {
		userItem.amount += 1;
		return userItem.save();
	}

	return Inventory.create({ user_id: this.user_id, item_id: item.id, amount: 1 });
};

/* eslint-disable-next-line func-names */
Users.prototype.getItems = function() {
	return Inventory.findAll({
		where: { user_id: this.user_id },
		include: ['item'],
	});
};

module.exports = { Users, ItemList, Inventory};
