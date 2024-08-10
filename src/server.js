const express = require('express')
require('dotenv').config()
const path = require('path')
const configView_Engine  = require('./config/viewEngine.js')
const webrouter = require('./routes/web.js')
const mysql = require('mysql2')
const { table } = require('console')
const { name } = require('ejs')

const app = express()
const port = process.env.PORT||8081
const hostname = process.env.HOST_NAME

// config teanplates +  config static file
configView_Engine(app)
app.use('/test',webrouter)

// test connection
// tao ket noo voi database
const connection = mysql.createConnection({
  host: 'localhost' ,
  port: 3307 ,
  user: 'root' ,
  password: '123456',
  database: 'hoidanit'
})

// lay du lieu tu database
connection.query(
'select * from Users',
  function (err,result,field){
    console.log("resul t= ",result)
    console.log("field = ",field)
  }

)

app.listen(port,hostname ,() => {
  console.log(`Example app listening on port ${port}`)
})