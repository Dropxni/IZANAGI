// backend/models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('usuarios', {
  nombre: DataTypes.CHAR(50),
  email: DataTypes.STRING(50),
  contraseña: DataTypes.STRING(100),
  descripcion: DataTypes.STRING(200),
  nivel: DataTypes.INTEGER,
  foto: DataTypes.STRING(100),
  monedas: DataTypes.JSON,
});

module.exports = User;
