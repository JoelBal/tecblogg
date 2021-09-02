const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
        // Your username
  user: 'root',
  // Your password
  password: 'Guard#54',
  database: 'techblogg_db',
    });
    // try {
    //   runMysql();
    // } catch(error) {
    //   console.error(error);
    // }
  
}

module.exports = sequelize;
