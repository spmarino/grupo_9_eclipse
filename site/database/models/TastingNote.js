module.exports = (sequelize, dataTypes) => {
    const alias = 'TastingNotes';
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        smell: {
            type: dataTypes.TEXT,
            allowNull: true,
        },
        taste: {
            type: dataTypes.TEXT,
            allowNull: true,
        },
        color: {
            type: dataTypes.TEXT,
            allowNull: true,
        }
    };
    const config = {
        tableName: 'tasting_notes',
        timestamps: false,
    }
    const TastingNote = sequelize.define(alias, cols, config);
    TastingNote.associate = (models) => {
     
        TastingNote.hasMany(models.Products, {
            as: 'products',
            foreignKey: 'tasting_notes_id',
        });
    };

    return TastingNote;
}