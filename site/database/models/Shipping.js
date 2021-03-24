module.exports = (sequelize, dataTypes) => {
    const alias = 'Shippings';
    const cols = {
id: {
    type: dataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
},
zone : {
    type: dataTypes.STRING(45),
    allowNull: false,
},
price : {
    type: dataTypes.INTEGER,
    allowNull: false,
},
shipping_time : {
    type: dataTypes.STRING(45),
    allowNull: false,
}
    };
const config = {
tableName:'shippings',
timestamps: false,
}

const Shipping = sequelize.define(alias, cols, config);
Shipping.associate = (models) => {
    Shipping.hasMany(models.Cars, {
        as: 'car',
        foreignKey: 'shipping_id'
    });

    Shipping.belongsToMany(models.Users, {
        as: 'carrito2',
        through: 'cars',
        foreignKey: 'shipping_id',
        otherKey: 'user_id',
        timestamps: false,
    });
};

return Shipping;
}