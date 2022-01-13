const express = require("express");
const consign = require("consign");
const cors = require("cors");
const bodyParser = require("body-parser");

module.exports = () => {
  const app = express();

  app.use((req, res, next) => {
    //console.log("Acessou o Middleware");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
    app.use(cors());
    next();
  });

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  consign().include("controllers").into(app);

  return app;
};
