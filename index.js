const express = require("express");
const cowsay = require("cowsay");
const app = express();

app.get("/", function (req, res) {
  res.send(
    "<pre>" +
      cowsay.say({
        text: "Welcome, geeks!",
        e: "oO",
        T: "U ",
      }) +
      "</pre>"
  );
});

app.listen(3000);
