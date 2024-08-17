const connection = require('../config/database')
const get_All_USer = async () => {
    let [results, fields] = await connection.query('select * from Users')
    return results
}
const get_user_byID = async (IdUser) => {
    let [results, fiedls] = await connection.query(`select * from Users where id = ?`, [IdUser]);
    let user = results && results.length > 0 ? results[0] : []
    return user
}
const updata_user_byID = async (email, name, city, userID) => {
    let [results, fiedls] = await connection.query(
        `UPDATE Users  SET email = ? , name = ?, city = ?   WHERE Id = ? `,
        [email, name, city, userID])
    return results
}
module.exports = { get_All_USer, get_user_byID, updata_user_byID }