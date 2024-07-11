'use strict';
const {
   Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
   class User extends Model {
      static associate(models) {
         // связи моделей
      }
   }
   User.init({
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: {
         type: DataTypes.ENUM('user', 'admin'),
         allowNull: false,
         defaultValue: 'user'
      }
   }, {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      timestamps: true
   });
   return User;
};