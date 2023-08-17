const express = require("express"),
    routes = express.Router();
const login_logout_Controllers =require("../Controllers/login&logoutController")
const adminControllers=require("../Controllers/adminController.js")
const userControllers=require("../Controllers/userControllers.js")
routes.post("/login", login_logout_Controllers.loginApi);
routes.get("/logout", login_logout_Controllers.logoutApi);

routes.get("/approve/:id", adminControllers.genBonafied);
routes.get("/getbonafied", userControllers.getBonafied);

module.exports = routes;


