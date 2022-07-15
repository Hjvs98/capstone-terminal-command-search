const express = require("express");
const cors = require("cors");
const path = require("path");
const {
  getCommandsByWeek,
  getCommandsBySubject,
  deleteCommand,
  createCommand,
  updateCommand,
} = require("./controller");
const { seed } = require("./seed.js");

const app = express();
app.use(cors());
app.use(express.json());
//////////////////////////////////
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/home.html"));
});
app.get("/styles", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/index.css"));
});
app.get("/byweek", getCommandsByWeek);
app.get("/bysubject", getCommandsBySubject);
app.get("/seed", seed);
///////////////////////////////////

// app.get(`/api/commands`, getCommands);
// app.delete(`/api/commands/:id`, deleteCommand);
// app.post(`/api/commands`, createCommand);
// app.put(`/api/commands/:id`, updateCommand);

const port = process.env.PORT || 3005;

app.listen(port, () => {
  console.log(`I'll be right by your side, 'til ${port}`);
});
