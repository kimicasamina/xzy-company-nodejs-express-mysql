const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    multipleStatements: true,
  })
  .promise();

async function getUser(username) {
  const [rows] = await pool.query("SELECT * FROM users WHERE name = ?;", [
    username,
  ]);

  return rows;
}

async function verifyUser(username, password, user) {
  const hashedPassword = user[0].password;
  const [results] = await pool.query(
    "SELECT *, MD5(CONCAT(?, ?)) AS confirm FROM users WHERE password = ? ;",
    [username, password, hashedPassword]
  );

  if (results[0].password === results[0].confirm) {
    isValid = true;
  } else {
    isValid = false;
  }

  console.log("RESULTS: ", results);
  return isValid;
}

module.exports = { getUser, verifyUser };
