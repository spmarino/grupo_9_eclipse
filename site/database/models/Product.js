module.exports = (sequelize, dataTypes) => {
    const alias = 'Products';
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        title: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        description: {
            type: dataTypes.TEXT,
            allowNull: false,
        },
        price: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        discount: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: true,
        },
        image: {
            type: dataTypes.STRING(45),
            allowNull: false,
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
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        tasting_notes_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        product_category_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
    };
    const config = {
        tableName: 'products',
        timestamps: false,
    }

    const Product = sequelize.define(alias, cols, config);
    Product.associate = (models) => {
        Product.belongsTo(models.ProductsCategories, {
            as: 'category',
            foreignKey: 'product_category_id',
        });

        Product.belongsTo(models.Features, {
            as: 'feature',
            foreignKey: 'features_id',
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