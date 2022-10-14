const express = require("express");
const path = require("path");

const app = express();

// ! FOR PRODUCTION
// app.use("/", express.static(path.join(__dirname, "client/build")));

app.get("/api/tweets", function (req, res) {
  res.json({
    data: "testing that my server is working...",
  });
});

app.listen(3080);
