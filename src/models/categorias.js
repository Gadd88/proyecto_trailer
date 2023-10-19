const { DataTypes } = require('sequelize');
const sequelize = require('../connection/connection');

const Categoria = sequelize.define('Categoria', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  timestamps: false,
  tableName: 'categorias'
});

module.exports = Categoria;
