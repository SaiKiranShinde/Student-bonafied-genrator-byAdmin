const express = require("express"),
  routes = express.Router();
const userControllers = require("../Controllers/userControllers.js");

routes.get("/dashboard", (req, res) => {
  if(req.cookies["www.student.com"])
    return res.render("user/dashboard")
  res.redirect("/")
});
routes.get("/profile", userControllers.getProfile);
routes.get("/bonafied", userControllers.Bonafied);
routes.get("/attendance", (req, res) => {
  res.render("user/attendance")
})
module.exports = routes;
