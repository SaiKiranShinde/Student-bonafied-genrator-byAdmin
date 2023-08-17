const express = require("express"),
  routes = express.Router();
const adminControllers = require("../Controllers/adminController.js");

routes.get("/dashboard", (req, res) => {
  if (req.cookies["www.admin.com"]) return res.render("admin/dashboard");
  res.redirect("/");
});
routes.get("/bonafied-request", adminControllers.getReqBonafides);

module.exports = routes;
