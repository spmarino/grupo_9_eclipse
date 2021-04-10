module.exports = (sequelize, dataTypes) => {
    const alias = 'Messages';
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        matter_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        mail: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        tel: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        message: {
            type: dataTypes.TEXT,
            allowNull: false,
        }
    };


    const config = {
        tableName: 'messages',
        timestamps: true,
        underscored: true,
    }
    const Message = sequelize.define(alias, cols, config);
    Message.associate = (models) => {
        Message.belongsTo(models.Matters, {
            as: 'matter',
            foreignKey: 'matter_id',
        });
    };

    return Message;
}