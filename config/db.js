const { Sequelize } = require('sequelize');
require('dotenv').config();


/*const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql'
});*/

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'mysql',
  dialectOptions: {
    connectTimeout: 60000 // 60 segundos
  }
});


const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('MySQL connected');
  } catch (err) {
    console.error('Unable to connect to MySQL:', err);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };

//mysql://root:HXQgZvcxVLkgsvnhzBpwSGueAlVievtT@roundhouse.proxy.rlwy.net:16521/railway
//mysql://root:hnKluIUZaYABwBwUHQlvWfzNJtmhKyXa@roundhouse.proxy.rlwy.net:16050/railway