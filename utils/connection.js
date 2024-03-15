const config = require("config");
const { Sequelize } = require("sequelize");
const { DATABASE, USERNAME, PASSWORD, HOST, PORT } = config.get("DBCONFIG");
console.log("Databse: ", DATABASE)
console.log("Host: ", HOST)
console.log("PASSWORD: ", PASSWORD)
console.log("PORT: ", PORT)
console.log("USERNAME: ", USERNAME)

module.exports = new Sequelize(DATABASE, USERNAME, PASSWORD, {
  host: HOST,
  dialect: "mysql",
  logging: false,
  port: PORT,
});
