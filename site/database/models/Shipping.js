module.exports = (sequelize, dataTypes) => {
    const alias = 'Shippings';
    const cols = {
id: {
    type: dataTypes.INTERGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
},
zone : {
    type: dataTypes.STRING(45),
    allowNull: false,
},
price : {
    type: dataTypes.INTERGER,
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
        as: 'carrito',
        through: 'cars',
        foreignKey: 'shipping_id',
        otherKey: 'user_id',
        timestamps: false,
    });
};

return Shipping;
}