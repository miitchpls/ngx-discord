const express = require("express");
const bodyParser = require("body-parser");
const router = require("./router");

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", router);

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
