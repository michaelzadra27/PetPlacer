const User = require('./user');

User.belongsTo(User, {
  foreignKey: 'linked_account'
});

module.exports = { User };
