require('dotenv').config
const mysql = require('mysql2')
// tao ket noo voi database
const connection = mysql.createPool({
    host: process.env.DB_HOSTNAME ,
    port: process.env.DB_PORT ,
    user: process.env.DB_USER ,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    waitForConnections: true ,
    connectionLimit: process.env.DB_CONNECTLIMIT ,
    queueLimit: 0
  })
  module.exports = connection