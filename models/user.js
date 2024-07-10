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
      role: DataTypes.STRING
   }, {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      timestamps: true
   });
   return User;
};