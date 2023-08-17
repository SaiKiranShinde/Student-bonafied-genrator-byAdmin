require("dotenv").config();
const mysql = require("mysql2"),
  jwt = require("jsonwebtoken"),
  dbConfig = require("../config/dbconfig.json");

const pool = mysql.createPool(dbConfig).promise();

const loginApi = (req, res) => {
  const user = req.body;
  console.log(user);
  pool
    .execute(`select * from user_login where username="${user.username}"`)
    .then(async ([result]) => {
      if (result.length === 0) return res.redirect("/");
      if (user.password === result[0].password) {
        const access_token = jwt.sign(
          { rollno: user.username },
          process.env.ACCESS_KEY,
          {
            expiresIn: "1d",
          }
        );
        if (result[0].isadmin) {
          res.cookie("www.admin.com", access_token, {
            httponly: true,
            maxAge: 24 * 60 * 60 * 1000,
          });
          return res.redirect("http://localhost:5000/admin/dashboard");
        }
        res.cookie("www.student.com", access_token, {
          httponly: true,
          maxAge: 24 * 60 * 60 * 1000,
        });
        res.redirect("http://localhost:5000/user/dashboard");
      } else {
        res.redirect("/");
      }
    });
};

const logoutApi = (req, res) => {
  res.clearCookie("www.student.com");
  res.clearCookie("www.admin.com");
  res.redirect("/");
};
module.exports = { loginApi, logoutApi };
