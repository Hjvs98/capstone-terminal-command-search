const express = require("express");
const cors = require("cors");
const path = require("path");
const { getCommands } = require("./controller");
const { getPage } = require("./controller");
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/home.html"));
});
app.get("/styles", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/index.css"));
});
// app.get("/byweek", function (req, res) {
//   res.sendFile(path.join(__dirname, "../client/byweek.html"));
// });

// app.get("/byweek", getCommands)
// app.get("/api/:value", getPage);

const port = process.env.PORT || 3005;

app.listen(port, () => {
  console.log(`I'll be right by your side, 'til ${port}`);
});
