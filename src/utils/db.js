const Sequelize = require("sequelize");
const dbConfig = require("#configs/db.js");

const config = dbConfig[process.env.NODE_ENV];
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);

sequelize
  .authenticate()
  .then(() => {
    console.log("✔ Database connected successfully.");
    return sequelize.sync();
  })
  .then(() => {
    console.log("✔ Database tables synchronized.");
  })
  .catch((err) => {
    console.error("✘ Error connecting to the database:", err);
  });

module.exports = sequelize;
