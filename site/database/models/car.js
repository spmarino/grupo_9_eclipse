module.exports = (sequelize, dataTypes) => {
    const alias = 'Cars';
    const cols = {
        id: {
            type: dataTypes.INTERGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        products_id: {
            type: dataTypes.INTERGER,
            allowNull: false,
        },
        user_id: {
            type: dataTypes.INTERGER,
            allowNull: false,
        },
        quantity: {
            type: dataTypes.INTERGER,
            allowNull: false,
        },
        shipping_id: {
            type: dataTypes.INTERGER,
            allowNull: false,
        },
    };
    const config = {
        tableName: 'shippings',
        timestamps: false,
    }

    const car = sequelize.define(alias, cols, config);
    car.associate = (models) => {
        car.belongsTo(models.Products, {
            as: 'products',
            foreignKey: 'products_id',
        });

        car.belongsTo(models.Users, {
            as: 'user',
            foreignKey: 'user_id',
        });

        car.belongsTo(models.Shippings, {
            as: 'shipping',
            foreignKey: 'shipping_id',
        });
    };

    return car;
}