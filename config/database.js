const Sequelize = require("sequelize");

module.exports = new Sequelize("usergig", "postgres", "root", {
  host: "localhost",
  dialect: "postgres",
  operatorsAliases: 0,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  define: {
    createdAt: false,
    updatedAt: false,
  },
});
