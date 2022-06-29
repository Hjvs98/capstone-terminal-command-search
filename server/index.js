const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
app.get("/styles", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.css"));
});

const port = process.env.PORT || 3005;

app.listen(port, () => {
  console.log(`I'll be right by your side, 'til ${port}`);
});
