const connection = require('../config/database.js')

const getHoidanIT_page = (req,res) => {
    res.render('../views/sample.ejs')
}
const gethome_page = (req,res) => {
  return  res.render('../views/home.ejs')
}
const CreateUser = (req,res) => {
  console.log(req.body)
  let email = req.body.Email
  let name = req.body.Name
  let city = req.body.City
  
  
  connection.query(
    `INSERT INTO Users (email,name,city) VALUES (?, ?, ?)`,
    [email,name,city],
    function(err,results){
        res.send("user create suceed!")
    }
  )
  

}
module.exports ={getHoidanIT_page , gethome_page , CreateUser} 