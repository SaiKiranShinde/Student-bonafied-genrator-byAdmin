const path = require("path");
const pdf = require("pdf-creator-node"),
  fs = require("fs");

require("dotenv").config();
const mysql = require("mysql2"),
  jwt = require("jsonwebtoken"),
  dbConfig = require("../config/dbconfig.json");

const pool = mysql.createPool(dbConfig).promise();

const genBonafied = async (req, res) => {
  const rollno = req.params.id;
  pool
    .execute(`select * from student_details where rollno=?`, [rollno])
    .then(([result]) => {
      const date = new Date();
      const html = fs.readFileSync(
        path.join(__dirname, "../views/components/bonafiedTemp.html"),
        "utf-8"
      );
      const filename = Math.random() + ".pdf";
      const document = {
        html: html,
        data: {
          user: {
            name: result[0].name,
            rollno: result[0].rollno,
            sem: result[0].sem,
            course: result[0].branch,
            batch: `${date.getFullYear()}-${new Date(
              date.getFullYear() + 1,
              0,
              1
            )
              .getFullYear()
              .toString()
              .substr(-2)}`,
            date: `${date.getDate()}-${
              date.getMonth() + 1
            }-${date.getFullYear()}`,
          },
        },
        path: "./Uploads/" + filename,
      };
      pdf
        .create(document, require("../json/formate.json"))
        .then((res) => {})
        .catch((err) => {
          console.log(err);
        });
      let filepath = "http://localhost:5000/Uploads/" + filename;
      pool.execute(
        `insert into student_bonafied (filename,path,date,rollno) values(?,?,?,?)`,
        [
          filename,
          filepath,
          `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`,
          rollno,
        ]
      );
      pool
        .execute(`delete from request_bonafied where rollno=?`, [
          result[0].rollno,
        ])
        .then(([result]) => {
          res.redirect("/admin/bonafied-request");
        });
    });
};
const getReqBonafides = (req, res) => {
  pool.execute("select * from request_bonafied").then(([result]) => {
    if (result.length === 0) {
      return res.render("./admin/bonafied", {
        data: null,
      });
    }
    res.render("./admin/bonafied", {
      data: result,
    });
  });
};

module.exports = { genBonafied, getReqBonafides };
