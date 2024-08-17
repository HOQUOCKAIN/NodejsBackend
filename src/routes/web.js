const path = require('path')
const express = require('express')
const { gethome_page, CreateUser, get_create_news_user, get_view_updateuser, post_update_user } = require('../controllers/homecontrollers.js')
const router = express.Router()



router.get('/homepage', gethome_page)
router.get('/create', get_create_news_user)
router.get('/edit/:id', get_view_updateuser)
router.post('/CreateUser', CreateUser)
router.post('/update-user', post_update_user)

module.exports = router;