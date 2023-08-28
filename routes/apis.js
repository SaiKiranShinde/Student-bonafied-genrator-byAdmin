const express = require("express"),
    routes = express.Router();
const login_logout_Controllers =require("../Controllers/login&logoutController")
const adminControllers=require("../Controllers/adminController.js")
const userControllers=require("../Controllers/userControllers.js")
routes.post("/login", login_logout_Controllers.loginApi);
routes.get("/logout", login_logout_Controllers.logoutApi);

routes.get("/approve/:id", adminControllers.approveBonafied);
routes.get("/reject/:id", adminControllers.rejectBonafied);

routes.get("/getbonafied", userControllers.getBonafied);
routes.get("/deletebonafied/:id", userControllers.deteleBonafied);

routes.get("/checkbonafiedstatus", userControllers.checkBonafiedStatus);

routes.get("/getattendance", userControllers.getattendance);


module.exports = routes;


