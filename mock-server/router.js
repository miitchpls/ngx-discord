const express = require("express");
const cors = require("cors");
const router = express.Router();

//MOCKS
const getMe = require("./mocks/getMe.json");
const getServers = require("./mocks/getServers.json");

//ROUTER
router
  .use(cors({ credentials: true, origin: "http://localhost:4200" }))
  .get("/", (req, res) => res.send("Server working!"))
  .get("/getMe", (req, res) => setTimeout(() => res.json(getMe), 2500))
  .get("/getServers", (req, res) => res.json(getServers));

module.exports = router;
