const sequelize = require('../models').sequelize;
const Users = require('../models').users;
c

const models = {
  Users,
  
};

const db = {
  models,
  sequelize
};

module.exports = db;
