const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
   {
       email: {
        type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          primaryKey: true,
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
          // validate: {
          //   len: [8],
          // },
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
    modelName: 'user'
  }
);

module.exports = User;