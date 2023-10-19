const { DataTypes } = require('sequelize');
const sequelize = require('../connection/connection');
const Actores = sequelize.define('actores', {
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
  tableName: 'actores'
});

module.exports = Actores;