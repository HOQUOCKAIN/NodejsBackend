const path = require('path')
const express = require('express')
const {getHoidanIT_page , gethome_page , getuser_page ,CreateUser } = require('../controllers/homecontrollers.js')
const router = express.Router()


router.get('/hoidanit',  getHoidanIT_page)
router.get('/sample1', gethome_page)
router.get('/homepage', gethome_page)
router.post('/CreateUser', CreateUser)

module.exports = router;