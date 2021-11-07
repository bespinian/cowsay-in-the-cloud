const express = require("express");
const cowsay = require("cowsay");
const app = express();

app.get("/", function (req, res) {
  res.send(
    "<pre>" +
      cowsay.say({
        text: "Moooh from the cloud!",
        e: "oO",
        T: "U ",
      }) +
      "</pre>"
  );
});

module.exports = app;
