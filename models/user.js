const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
   {
       email: {
        type: DataTypes.STRING(100),
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
            type: DataTypes.STRING(3000),
            allowNull: true,
            defaultValue: '[]'
       },
       
       linked_account: {
         type: DataTypes.STRING,
         allowNull: true,
         references: {
          model: 'user',
          key: 'email',
          unique: false
        },

         validate: {
          isEmail: true,
        },
       }
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