const path = require('path')
const express = require('express')

const configView_Engine = (app) => {
    app.set('views',path.join('./src','views'))
    app.set('views engine' ,'ejs')
    app.use(express.static(path.join('./src','public')))
}

module.exports = configView_Engine;