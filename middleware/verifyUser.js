const bcrypt = require("bcrypt");
const crypto = require("crypto");

async function verifyUser(userStr, hashedPassword) {
  //   let userStr = username + password;
  const hashedStr = crypto.createHash("md5").update(userStr).digest("hex");

  console.log("RESULTS: ", hashedStr);
  return hashedStr;
}

module.exports = verifyUser;

// const hashedPassword = user[0].password;
// console.log("HASHED PASSWORD: ", hashedPassword);
// const secret = password;
// console.log(
//   "SECRET: ",
//   crypto.createHash("md5").update(secret).digest("hex")
// );
