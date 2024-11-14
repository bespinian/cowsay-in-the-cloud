const express = require("express");
const cowsay = require("cowsay");
const app = express();

app.get("/", function (req, res) {
  res.send(
    "<pre>" +
      cowsay.say({
        text: "Hello from the cloud!",
        e: "--",
        T: "II",
      }) +
      "</pre>",
  );
});

module.exports = app;
