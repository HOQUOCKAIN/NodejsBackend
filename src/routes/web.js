const path = require('path')
const express = require('express')
const { gethome_page , CreateUser ,get_create_news_user , get_about_page} = require('../controllers/homecontrollers.js')
const router = express.Router()



router.get('/homepage', gethome_page)
router.get('/create',get_create_news_user)
router.get('/about',get_about_page)
router.post('/CreateUser', CreateUser)

module.exports = router;