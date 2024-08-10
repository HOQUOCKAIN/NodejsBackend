const express = require('express')
require('dotenv').config()
const path = require('path')
const configView_Engine  = require('./config/viewEngine.js')
const webrouter = require('./routes/web.js')
const app = express()
const port = process.env.PORT||8081
const hostname = process.env.HOST_NAME

// config teanplates +  config static file
configView_Engine(app)

// get /hoidanit


app.use('/test',webrouter)

app.listen(port,hostname ,() => {
  console.log(`Example app listening on port ${port}`)
})