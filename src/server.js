const express = require('express')
require('dotenv').config()
const path = require('path')
const configView_Engine  = require('./config/viewEngine.js')
const webrouter = require('./routes/web.js')
const { table } = require('console')
const { name } = require('ejs')

const app = express()
const port = process.env.PORT||8081
const hostname = process.env.HOST_NAME

// Cau hinh req.body de lay input tu html
app.use(express.json())
app.use(express.urlencoded({extended : true}))

// config teanplates +  config static file
configView_Engine(app)
app.use('/test',webrouter)



app.listen(port,hostname ,() => {
  console.log(`Example app listening on port ${port}`)
})