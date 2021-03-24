module.exports = (sequelize, dataTypes) => {
    const alias = 'Products',
    const cols = {
        id: {
            type: dataTypes.INTERGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        title: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        description: {
            type: dataTypes.TEXT('tiny'),
            allowNull: false,
        },
        price: {
            type: dataTypes.INTERGER.UNSIGNED,
            allowNull: false,
        },
        discount: {
            type: dataTypes.INTERGER.UNSIGNED,
            allowNull: true,
        },
        image: {
            type: dataTypes.STRING(45),
            allowNull: true,
            defaultValue: 'default.png',

        },
        free_shipping: {
            type: dataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        cover_page: {
            type: dataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        features_id: {
            type: dataTypes.INTERGER,
            allowNull: true,
        },
        tasting_notes_id: {
            type: dataTypes.INTERGER,
            allowNull: true,
        },
        product_category_id: {
            type: dataTypes.INTERGER,
            allowNull: true,
        },
    };
    const config = {
        tableName: 'products',
        timestamps: false,
    },

    const Product = sequelize.define(alias, cols, config);
    Product.associate = (models) => {
        Product.belongsTo(models.ProductsCategories, {
            as: 'category',
            foreignKey: 'product_category_id',
        });

        Product.belongsTo(models.Features, {
            as: 'feature',
            foreignKey: 'feautures_id',
        });

        Product.belongsTo(models.TastingNotes, {
            as: 'note',
            foreignKey: 'tasting_notes_id',
        });

        Product.belongsToMany(models.Users, {
            as: 'carrito',
            through: 'cars',
            foreignKey: 'products_id',
            otherKey: 'user_id',
            timestamps: false,
        });

    };

    return Product;
}