const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 8080;
const router = express.Router();

router
  .use(cors({ credentials: true, origin: "http://localhost:4200" }))
  .get("/", (req, res) => res.send("Server working!"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", router);

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
