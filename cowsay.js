const express = require("express");
const cowsay = require("cowsay");
const app = express();

function makeCows(count) {
  var cows = "";
  for (i=0; i<count; i++) {
    cows += cowsay.say({
      text: "I'm random cow number " + (i + 1) ,
      e: "**",
      T: "U",
      r: true
      }) + "\n";
  }
  return cows;
}

app.get("/", function (req, res) {
  count = Math.floor((Math.random() * 1000) + 1);
  res.send(
    "<pre>" + makeCows(count) + "</pre>"
  );
});

module.exports = app;
