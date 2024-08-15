const { render } = require('ejs')
const connection = require('../config/database.js')
const mysql = require('mysql2/promise')

const gethome_page = (req,res) => {
  res.render('../views/home.ejs')
}

const get_create_news_user =(req ,res) => {
   res.render('../views/create.ejs')
}

const get_about_page = (req , res) => {
 res.render('../views/about.ejs')
}
const  CreateUser = async (req,res) => {
  console.log(req.body)
  let email = req.body.Email
  let name = req.body.Name
  let city = req.body.City
  
  

  
    let [results,fields] = await connection.query(
      `INSERT INTO Users (email,name,city) VALUES (?, ?, ?)`,[email,name,city],
      
  )
  res.send('add user succeed!')

}
module.exports ={ gethome_page , CreateUser  , get_create_news_user , get_about_page} 