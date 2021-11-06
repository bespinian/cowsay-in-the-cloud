const serverless = require("serverless-http");
const app = require("./cowsay.js");

module.exports.handler = serverless(app);
