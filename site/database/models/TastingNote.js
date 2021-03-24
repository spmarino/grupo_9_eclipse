module.exports = (sequelize, dataTypes) => {
    const alias = 'TastingNotes';
    const cols = {
        id: {
            type: dataTypes.INTERGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        smell: {
            type: dataTypes.TEXT('tiny'),
            allowNull: true,
        },
        taste: {
            type: dataTypes.TEXT('tiny'),
            allowNull: true,
        },
        color: {
            type: dataTypes.TEXT('tiny'),
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