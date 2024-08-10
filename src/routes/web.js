const path = require('path')
const express = require('express')
const {getHoidanIT_page , getsample1_page } = require('../controllers/Home/homecontrollers')
const router = express.Router()


router.get('/hoidanit',  getHoidanIT_page)
router.get('/sample1',getsample1_page)
 
module.exports = router;