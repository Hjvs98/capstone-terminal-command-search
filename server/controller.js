// const commands = require("../db.json");
// const commandId = 14;
require("dotenv").config();
const { CONNECTION_STRING } = process.env;
const Sequelize = require("sequelize");

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

module.exports = {
  getCommandsByWeek: (req, res) => {
    sequelize
      .query(
        `
    SELECT * FROM commands`
      )
      .then((dbRes) => {
        res.status(200).send(dbRes[0]);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },
  getCommandsBySubject: (req, res) => {
    sequelize
      .query(
        `
    SELECT * FROM commands
    ORDER BY subject`
      )
      .then((dbRes) => {
        res.status(200).send(dbRes[0]);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },
  getPage: (req, res) => {
    const value = req.params.value;
    if (value === "By Week") {
      res.send("http://localhost:3005/byweek");
    } else if (value === "By Subject") {
      res.send("http://localhost:3005/bysubject");
    } else if (value === "Features") {
      res.send("http://localhost:3005/features");
    }
  },
  deleteCommand: (req, res) => {
    let index = commands.findIndex((elem) => elem.id === +req.params.id);
    commands.splice(index, 1);
    res.status(200).send(commands);
  },
  createCommand: (req, res) => {
    let {
      command,
      command_name,
      command_description,
      week,
      subject,
      required_for_code_to_function,
      required_parameters_or_arguments,
      optional_parameters,
    } = req.body;
    let newCommand = {
      command_id,
      command,
      command_name,
      command_description,
      week,
      subject,
      required_for_code_to_function,
      required_parameters_or_arguments,
      optional_parameters,
    };
    commands.push(newCommand);
    res.status(200).send(commands);
    globalId++;
  },
  updateCommand: (req, res) => {
    let { id } = req.params;
    let { type } = req.body;
    let index = commands.findIndex((elem) => +elem.id === +id);
  },
};
