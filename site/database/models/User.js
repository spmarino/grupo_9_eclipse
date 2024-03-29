module.exports = (sequelize, dataTypes) => {
    const alias = 'Users';
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        lastname: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        email: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        password: {
            type: dataTypes.STRING(80),
            allowNull: false,
        },
        date_of_birth: {
            type: dataTypes.DATEONLY,
            allowNull: false,
        },
        avatar: {
            type: dataTypes.STRING(80),
            allowNull: true,
            defaultValue: 'default.png',
        },
        category_id: {
            type: dataTypes.INTEGER,
            allowNull: true,
            defaultValue: 1,
        },
        sex_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            
        },

    };
    const config = {
        tableName: 'users',
        timestamps: true,
        underscored: true,
    }

    const User = sequelize.define(alias, cols, config);
    User.associate = (models) => {
        User.belongsTo(models.UsersCategories, {
            as: 'category',
            foreignKey: 'category_id',
        });

        User.belongsTo(models.UsersSex, {
            as: 'sex',
            foreignKey: 'sex_id',
        });
        User.belongsToMany(models.Products, {
            as: 'carrito',
            through: 'cars',
            foreignKey: 'user_id',
            otherKey: 'products_id',
            timestamps: false,
        });

        User.belongsToMany(models.Shippings, {
            as: 'carrito2',
            through: 'cars',
            foreignKey: 'user_id',
            otherKey: 'shipping_id',
            timestamps: false,
        });


    };

    return User;
}