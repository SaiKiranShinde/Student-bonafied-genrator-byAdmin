const express = require("express"),
    routes = express.Router();
const login_logout_Controllers =require("../Controllers/login&logoutController")

routes.post("/login", login_logout_Controllers.loginApi);
routes.get("/logout", login_logout_Controllers.logoutApi);


module.exports = routes;


