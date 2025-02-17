const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/db.json`)[env];

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const userModel = require('./user');

const models = {
  user: userModel.init(sequelize, Sequelize),
};

Object.values(models)
  .filter(({ associate }) => typeof associate === "function")
  .forEach(model => model.associate(models));

const db = {
  ...models,
  sequelize
};

module.exports = db;
