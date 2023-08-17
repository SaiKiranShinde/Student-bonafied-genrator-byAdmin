const express = require("express"),
  routes = express.Router();

routes.get("/dashboard", (req, res) => {
  if (req.cookies["www.admin.com"]) return res.render("admin/dashboard");
  res.redirect("/");
});
routes.get("/bonafied-request", (req, res) => {
    res.render("./admin/bonafied",{data:[{name:"001",date:"today"}]})
});

module.exports = routes;
