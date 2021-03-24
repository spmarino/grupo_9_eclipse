module.exports = (sequelize, dataTypes) => {
    const alias = 'UsersCategories',
    const cols = {
id: {
    type: dataTypes.INTERGER,
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
tableName:'users_categories',
timestamp: false,
},

const UserCategory = sequelize.define(alias, cols, config);

UserCategory.associate = (models) => {
    UserCategory.hasMany(models.Users, {
        as: 'users',
        foreignKey: 'category_id',
    });
};

return UserCategory;
}