const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
   {
       user_id:{
        type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
       }, 
       email: {
        type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true,
          },
       },

       user_name: {
        type: DataTypes.STRING,
            allowNull: false
       },

       password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [8],
          },
       },

       liked_dogs: {
            type: DataTypes.STRING,
            allowNull: true,
       },
   },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'User'
  }
);

module.exports = User;