require("dotenv").config();
const { render } = require("ejs");
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
  try {
    const username = jwt.verify(
      req.cookies["www.student.com"],
      process.env.ACCESS_KEY
    );
    pool
      .execute(`select * from student_bonafied where rollno=?`, [
        username.rollno,
      ])
      .then(([result]) => {
        if (result.length === 0) {
          return res.render("./user/bonafied", {
            data: null,
            status: "",
          });
        }
        res.render("./user/bonafied", {
          data: result,
        });
      });
  } catch (err) {
    console.log(err);
  }
};

const deteleBonafied = (req, res) => {
  const id = req.params.id;
  pool
    .execute(`delete from student_bonafied where id=?`, [id])
    .then((result) => {
      res.redirect("http://localhost:5000/user/bonafied");
    });
};
const checkBonafiedStatus = (req, res) => {
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
        if (result.length === 0) return res.json({ message: "", status: "" });
        if (result[0].status === 0)
          return res.json({
            message: "Your request is pending",
            status: "pending",
          });
        if (result[0].status === 2)
          return res.json({
            message: "Your request is rejected by Admin",
            status: "reject",
          });
      });
  } catch (err) {
    res.clearCookie("www.student.com");
    return res.render("404");
  }
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
          new Date(Date.now()) > new Date(temp[0], temp[1] - 1, temp[2] + 1)
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
            new Date(Date.now()) > new Date(temp[0], temp[1] - 1, temp[2] + 1)
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
        } else if (result[0].status === 0) {
          return res.json({
            message:
              "Your resuest is pending\nPlease wait for 24 hours then try to resend the request",
          });
        } else {
          return res.json({
            message:
              "Your resuest was rejected by Admin\nPlease wait for 24 hours then try to resend the request",
          });
        }
      });
  } catch (err) {
    res.clearCookie("www.student.com");
    return res.render("404");
  }
};
const getattendance = (req, res) => {
  try {
    const username = jwt.verify(
      req.cookies["www.student.com"],
      process.env.ACCESS_KEY
    );
    pool
      .execute(
        `select sd.batch,st.* from student_details sd,student_attendance st where sd.rollno=? and sd.rollno=st.rollno`,
        [username.rollno]
      )
      .then(([studentData]) => {
        pool
          .execute(`select bt.* from batch_attendance bt where bt.batch=?`, [
            studentData[0].batch,
          ])
          .then(([batchData]) => {
            res.json({
              studentData: studentData[0],
              batchData: batchData[0],
            });
          });
      });
  } catch (err) {
    res.clearCookie("www.student.com");
    return res.render("404");
  }
};

module.exports = {
  getProfile,
  Bonafied,
  getBonafied,
  getattendance,
  checkBonafiedStatus,
  deteleBonafied,
};
