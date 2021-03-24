module.exports = (sequelize, dataTypes) => {
    const alias = 'ProductsCategories';
    const cols = {
id: {
    type: dataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
},
category : {
    type: dataTypes.STRING(45),
    allowNull: false,
},
    };
const config = {
tableName:'products_categories',
timestamps: false,
}

const ProductCategory = sequelize.define(alias, cols, config);

ProductCategory.associate = (models) => {
    
    ProductCategory.hasMany(models.Products, {
        as: 'products',
        foreignKey: 'product_category_id',
    });
};

return ProductCategory;
}