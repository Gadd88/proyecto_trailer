const { DataTypes } = require('sequelize');
const sequelize = require('../connection/connection');
const Generos = sequelize.define('Generos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  }
}, {
  timestamps: false,
  tableName: 'generos'
});

module.exports = Generos;