const connection = require('../config/database.js')

const getHoidanIT_page = (req,res) => {
    res.render('../views/sample.ejs')
}
const gethome_page = (req,res) => {
  return  res.render('../views/home.ejs')
}
const CreateUser = (req,res) => {
  console.log('chack req.body',req.body)
  res.send('Da them user')
}
let Users = []
const getuser_page= (req,res) => {
    connection.query(
        'select * from Users',
          function (err,result,field){
            Users = result
            console.log("result= ",result)
            res.send(JSON.stringify(Users))
          }
        )
}
module.exports ={getHoidanIT_page , gethome_page , getuser_page , CreateUser} 