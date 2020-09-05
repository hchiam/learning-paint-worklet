var express = require("express");
var app = express();

app.use(function (req, res, next) {
  var allowedOrigins = []; //['https://www.freecodecamp.com'];
  var origin = req.headers.origin || "*";
  if (!process.env.XORIG_RESTRICT || allowedOrigins.indexOf(origin) > -1) {
    console.log(origin);
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
  }
  next();
});

app.use(express.static("public"));

app.route("/").get(function (req, res) {
  res.sendFile(process.cwd() + "/example.html");
});

app.route("/worklet.js").get(function (req, res) {
  res.sendFile(process.cwd() + "/worklet.js");
});

var listener = app.listen(process.env.PORT | 8000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
