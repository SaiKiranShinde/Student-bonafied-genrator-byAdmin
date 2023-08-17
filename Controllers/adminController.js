const path = require("path");
const pdf = require("pdf-creator-node"),
  fs = require("fs");

require("dotenv").config();
const mysql = require("mysql2"),
  jwt = require("jsonwebtoken"),
  dbConfig = require("../config/dbconfig.json");

const pool = mysql.createPool(dbConfig).promise();

const genBonafied = async (req, res) => {
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
        name: "sai kiran shinde",
        fatherName: "Srinivas Shinde",
        currentyear: "IV sem I",
        course: "ECE",
        date: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`,
      },
    },
    path: "./Uploads/" + filename,
  };
  pdf
    .create(document, require("../json/formate.json"))
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  let filepath = "http://localhost:5000/Uploads/" + filename;
  res.render("bonafied", {
    data: [
      {
        name: filename,
        date: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`,
        path: filepath,
      },
    ],
  });
};

module.exports = { genBonafied };
