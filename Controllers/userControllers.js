require("dotenv").config();
const mysql = require("mysql2"),
  jwt = require("jsonwebtoken"),
  dbConfig = require("../config/dbconfig.json");

const pool = mysql.createPool(dbConfig).promise();

const getProfile = async (req, res) => {
  try {
    const username = jwt.verify(
      req.cookies["www.student.com"],
      process.env.ACCESS_KEY
    );
    pool
      .execute("select * from student_details where rollno=?", [
        username.rollno,
      ])
      .then(([result]) => {
        res.render("./user/profile", { data: result[0] });
      });
  } catch (err) {
    res.clearCookie("www.student.com");
    return res.render("404");
  }
};
const Bonafied = (req, res) => {
  res.render("./user/bonafied", { data: null });
};

const getBonafied = async (req, res) => {
  try {
    const username = jwt.verify(
      req.cookies["www.student.com"],
      process.env.ACCESS_KEY
    );
    pool
      .execute(`select * from request_bonafied where rollno=?`, [
        username.rollno,
      ])
      .then(([result]) => {
        let temp;
        let newDate = new Date();
        let today = `${newDate.getFullYear()}-${
          newDate.getMonth() + 1
        }-${newDate.getDate()}`;
        if (result.length > 0) {
          temp = result[0].date.split("-").map((i) => parseInt(i));
        }
        if (
          result.length === 0 ||
          new Date(Date.now()) > new Date(temp[0], temp[1], temp[2] + 1)
        ) {
          if (result.length === 0) {
            pool.execute(
              `insert into request_bonafied (rollno,date,status) values(?,?,?)`,
              [username.rollno, today, 0]
            );
            return res.json({
              message:
                "Request has Send to admin\n pleace wait for 6 to 12 hours\n For Admin confirmation",
            });
          } else if (
            new Date(Date.now()) > new Date(temp[0], temp[1], temp[2] + 1)
          ) {
            pool.execute(
              `update request_bonafied set date=?,status=${0} where rollno=?`,
              [today, username.rollno]
            );
            return res.json({
              message:
                "Request has been updated pleace wait for 6 to 12 hours\n For Admin confirmation",
            });
          }
        } else {
          return res.json({
            message:
              "Your resuest is pending\nPlease wait for 24 hours then try to resend the request",
          });
        }
      });
  } catch (err) {
    res.clearCookie("www.student.com");
    return res.render("404");
  }
};

module.exports = { getProfile,Bonafied,getBonafied };
