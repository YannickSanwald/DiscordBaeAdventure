module.exports = (sequelize, DataTypes) => {
	return sequelize.define('users', {
		user_id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		balance: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
			allowNull: false,
		},
		// occupationTimeStamp: {
		// 	type: DataTypes.INTEGER,
		// 	defaultValue: 0,
		// 	allowNull: false,
		// },
		// occupationTime: {
		// 	type: DataTypes.INTEGER,
		// 	defaultValue:0,
		// 	allowNull:false,
		// },
		// occupationReason: {
		// 	type:DataTypes.STRING,
		// 	defaultValue: "Du bist gerade beschäftigt.",
		// 	allowNull:false,
		// }
	}, {
		timestamps: false,
	});
};