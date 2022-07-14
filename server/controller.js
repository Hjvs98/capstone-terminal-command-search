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
    SELECT * FROM commands
    ORDER BY week`
      )
      .then((dbRes) => {
        res.status(200).send(dbRes[0]);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },

  deleteCommand: (req, res) => {
    let index = commands.findIndex((elem) => elem.id === +req.params.id);
    commands.splice(index, 1);
    res.status(200).send(commands);
  },
  createCommand: (req, res) => {
    let { title, rating, imageURL } = req.body;
    let newCommand = {
      id: globalId,
      title,
      rating,
      imageURL,
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
