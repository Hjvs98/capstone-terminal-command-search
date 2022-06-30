const commands = require("./db.json");

module.exports = {
  getCommands: (req, res) => {
    res.status(200).send(commands);
  },
};
