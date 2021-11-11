const express = require("express");
const cowsay = require("cowsay");
const app = express();

function get_cows(error, cow_names) {
  if (error) {
      console.log(error)
  }
  else if (cow_names) {
      console.log(`Number of cows available: ${cow_names.length}`);
      for (i=0;i<cow_names.length;i++) {
        console.log(cow_names[i]);
      }
  }
}

app.get("/", function (req, res) {
  cowsay.list(get_cows);
  res.send(
    "<pre>" +
      cowsay.say({
        text: "please reload the site!j",
        e: "**",
        T: "U",
        r:true
        }) +
      "</pre>"
  );
});

module.exports = app;
