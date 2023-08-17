const express = require("express"),
  app = express(),
  bodyaParser = require("body-parser"),
  cookieParser = require("cookie-parser");

const routes = require("./routes/routes.js");

app.set("view engine", "ejs");
app.use(cookieParser());
app.use(bodyaParser.json())
app.use(bodyaParser.urlencoded({ extended: true }));
app.use("/", express.static("./public"));
app.use("/Uploads", express.static("./Uploads"));

app.use("/", routes);
app.use("/api", require("./routes/apis.js"));
app.use("/user", require("./routes/userRouters.js"));
app.use("/admin", require("./routes/adminRoutes.js"));

app.listen(5000, (err) => {
  if (err) throw err;
  console.log("Server is listening at port 5000");
});
