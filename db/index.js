const mysql = require('mysql');
const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'admin123',
  database: 'first_mysql_table',
})
module.exports = db;