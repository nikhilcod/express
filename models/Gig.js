const Sequelize = require("sequelize");
const db = require("../config/database");

const Gig = db.define("gig", {
  name: {
    type: Sequelize.STRING,
  },
  age: {
    type: Sequelize.STRING,
  },
});

module.exports = Gig;
