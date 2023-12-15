const express = require("express");
const bodyParser = require("body-parser");
const router = require("./router");
const path = require("path");

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/assets", express.static(path.join(__dirname, "public")));
app.use("/api", router);

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
