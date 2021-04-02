module.exports = (sequelize, dataTypes) => {
    const alias = 'UsersSex';
    const cols = {
id: {
    type: dataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
},
type_sex : {
    type: dataTypes.STRING(45),
    allowNull: false,
},
    };
const config = {
tableName:'users_sex',
timestamp: false,
}

const UserSex= sequelize.define(alias, cols, config);

UserSex.associate = (models) => {
    UserSex.hasMany(models.Users, {
        as: 'users',
        foreignKey: 'sex_id',
    });
};

return UserSex;
}