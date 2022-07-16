const express = require("express");
const cors = require("cors");
const path = require("path");
const {
  getCommandsByWeek,
  getCommandsBySubject,
  deleteCommand,
  createCommand,
  updateCommand,
  getPage,
} = require("./controller");
const { seed } = require("./seed.js");

const app = express();
app.use(cors());
app.use(express.json());
//////////////////////////////////
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/home/home.html"));
});
app.get("/styles", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/home/index.css"));
});
app.get("/js", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/home/main.js"));
});
app.get("/byweek", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/byweek/byweek.html"));
});
app.get("/styledbyweek", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/byweek/byweek.css"));
});
app.get("/byweekjs", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/byweek/byweek.js"));
});
app.get("/api/byweek", getCommandsByWeek);
app.get("/bysubject", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/bysubject/bysubject.html"));
});
app.get("/api/bysubject", getCommandsBySubject);
app.get("/styledbysubject", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/bysubject/bysubject.css"));
});
app.get("/bysubjectjs", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/bysubject/bysubject.js"));
});
app.get("/features", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/features/features.html"));
});
app.get("/styledfeatures", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/features/features.css"));
});
app.get("/featuresjs", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/features/features.js"));
});

///////////////////////////////////
app.get("/seed", seed);

// app.get(`/api/commands`, getCommands);
// app.delete(`/api/commands/:id`, deleteCommand);
// app.post(`/api/commands`, createCommand);
// app.put(`/api/commands/:id`, updateCommand);

const port = process.env.PORT || 3005;

app.listen(port, () => {
  console.log(`I'll be right by your side, 'til ${port}`);
});
