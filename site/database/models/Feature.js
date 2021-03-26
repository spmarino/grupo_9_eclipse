module.exports = (sequelize, dataTypes) => {
    const alias = 'Features';
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        varietal: {
            type: dataTypes.STRING(45),
            allowNull: true,
        },
        vintage: {
            type: dataTypes.INTEGER,
            allowNull: true,
        },
        type_of_barrel: {
            type: dataTypes.STRING(45),
            allowNull: true,
        },
        time_in_barrel: {
            type: dataTypes.INTEGER,
            allowNull: true,
        },
        time_in_bottle: {
            type: dataTypes.INTEGER,
            allowNull: true,
        },
        harvest: {
            type: dataTypes.STRING(45),
            allowNull: true,
        },
        finca: {
            type: dataTypes.STRING(45),
            allowNull: true,
        },
        terroir: {
            type: dataTypes.STRING(45),
            allowNull: true,
        }    
    };
    const config = {
        tableName: 'features',
        timestamps: false,
    }
    const Feature = sequelize.define(alias, cols, config);

    Feature.associate = (models) => {
    
        Feature.hasMany(models.Products, {
            as: 'products',
            foreignKey: 'features_id',
        });
    };
    return Feature;
}