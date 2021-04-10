module.exports = (sequelize, dataTypes) => {
    const alias = 'Matters';
    const cols = {
id: {
    type: dataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
},
title : {
    type: dataTypes.STRING(45),
    allowNull: false,
}
    };
const config = {
tableName:'matters',
timestamps: false,
}

const Matter = sequelize.define(alias, cols, config);
Matter.associate = (models) => {
    
    Matter.hasMany(models.Messages, {
        as: 'messages',
        foreignKey: 'matter_id',
    });
};
return Matter;
}