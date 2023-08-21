const express = require("express"),
  routes = express.Router();

routes.get("/", (req, res) => {
  if (req.cookies["www.student.com"]) return res.render("user/dashboard");
  if (req.cookies["www.admin.com"]) return res.render("admin/dashboard");
  res.render("login", {message:""});
});

routes.get("/login", (req, res) => {
  if (req.cookies["www.student.com"]) return res.render("user/dashboard");
  if (req.cookies["www.admin.com"]) return res.render("admin/dashboard");
  res.render("login", {message:""});
});

module.exports = routes;
