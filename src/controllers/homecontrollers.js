const { render } = require('ejs')
const connection = require('../config/database.js')
const mysql = require('mysql2/promise')
const { get_All_USer, get_user_byID, updata_user_byID } = require('../services/CRUDservices.js')
// trang home page
const gethome_page = async (req, res) => {
  let results = await get_All_USer()
  res.render('../views/home.ejs', { listUsers: results })
}
// trang tao noi user
const get_create_news_user = (req, res) => {
  res.render('../views/create.ejs')
}

const CreateUser = async (req, res) => {
  let email = req.body.Email
  let name = req.body.Name
  let city = req.body.City
  let [results, fiedls] = await connection.query(
    `INSERT INTO Users (email,name,city) VALUES (?, ?, ?)`, [email, name, city])
  res.send('add user succeed!')
}

// hien thi thong tin cua user
const get_view_updateuser = async (req, res) => {
  const IdUser = req.params.id
  const user = await get_user_byID(IdUser)
  res.render('../views/edit.ejs', { userEdit: user })
}

const post_update_user = async (req, res) => {
  let email = req.body.Email
  let name = req.body.Name
  let city = req.body.City
  let userID = req.body.Id
  let results = await updata_user_byID(email, name, city, userID)
  res.redirect('/homepage')
}

// lay du lieu tu html ve database


module.exports = { gethome_page, CreateUser, get_create_news_user, get_view_updateuser, post_update_user } 