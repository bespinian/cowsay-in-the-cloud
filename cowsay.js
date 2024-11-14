const express = require("express");
const cowsay = require("cowsay");
const app = express();

app.get("/", function (req, res) {
  res.send(
    "<pre>" +
      cowsay.say({
        text: "hallo",
        e:"oo",
        T: "#",
      }) +
      "</pre>"
  );
});

module.exports = app;
