const express = require("express");
const cors = require("cors");
const path = require("path");

const { getCommandsByWeek } = require("./controller.js");
const { seed } = require("./seed.js");

const app = express();
app.use(cors());
app.use(express.json());
///////////////Basic Deployment///////////////////
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/home.html"));
});
app.get("/styles", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/index.css"));
});
///////////////////////////////////
// const {
//   getPage,
//   getCommands,
//   deleteCommand,
//   createCommand,
//   updateCommand,
// } = require("./controller");

// app.get(`/api/commands`, getCommands);
// app.delete(`/api/commands/:id`, deleteCommand);
// app.post(`/api/commands`, createCommand);
// app.put(`/api/commands/:id`, updateCommand);
/////////////Idea on how to connect//////////////

app.get("/byweek", getCommandsByWeek);
app.get("/seed", seed);

const port = process.env.PORT || 3005;

app.listen(port, () => {
  console.log(`I'll be right by your side, 'til ${port}`);
});
