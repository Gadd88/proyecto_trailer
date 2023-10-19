const { DataTypes } = require('sequelize');
const sequelize = require('../connection/connection');

const generos_mid_catalogo = sequelize.define('generos_mid_catalogo', {
    idGenero: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'generos', 
            key: 'id' 
        }
    },
    idCatalogo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'catalogo', 
            key: 'id' 
        }
    }
}, {
    timestamps: false,
    tableName: 'generos_mid_catalogo'
});

module.exports = generos_mid_catalogo;