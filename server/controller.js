// const commands = require("../db.json");

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
// const nextCommand = 4;

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
        res.sendStatus(400);
      });
  },
  getCommandsFeat: (req, res) => {
    sequelize
      .query(`SELECT * FROM commands ORDER BY command_id`)
      .then((dbRes) => {
        res.status(200).send(dbRes[0]);
      })
      .catch((err) => {
        res.status(400).send("Unable to load all commands.");
      });
  },
  createCommand: (req, res) => {
    const commandIn = req.body.command;
    const commandName = req.body.command_name;
    const commandDesc = req.body.command_description;
    const weekL = req.body.week;
    const subj = req.body.subject;
    const requiredFun = req.body.required_for_code_to_function;
    const reqPA = req.body.required_parameters_or_arguments;
    const optPA = req.body.optional_parameters;

    sequelize
      .query(
        `insert into commands (command, command_name, command_description, week, subject, required_for_code_to_function, required_parameters_or_arguments, optional_parameters)
      values ('${commandIn}', '${commandName}', '${commandDesc}', 
      ${weekL}, '${subj}', ${requiredFun}, '${reqPA}', '${optPA}')
     `
      )
      .then(() => res.status(200).send("Your command has been created."))
      .catch((err) => {
        console.log(err);
        res
          .status(400)
          .send(
            "Something went wrong, please make sure all fields are filled out and try again"
          );
      });
  },
  updateCommand: (req, res) => {
    let {
      command_id,
      command,
      command_name,
      command_description,
      week,
      subject,
      required_for_code_to_function,
      required_parameters_or_arguments,
      optional_parameters,
    } = req.body;
    sequelize
      .query(
        `update commands set command = '${command}',
            command_name = '${command_name}',
            command_description = '${command_description}',
            week = ${week},
            subject = '${subject}',
            required_for_code_to_function = ${required_for_code_to_function},
            required_parameters_or_arguments = '${required_parameters_or_arguments}',
            optional_parameters = '${optional_parameters}'
            WHERE command_id = ${command_id}`
      )
      .then(() => res.status(200).send("Your command has been updated."))
      .catch((err) => {
        res
          .status(400)
          .send(
            "Something went wrong, please make sure all fields are filled out and try again"
          );
      });
  },
  deleteCommand: (req, res) => {
    sequelize
      .query(`DELETE FROM commands WHERE command_id = ${req.params.id}`)
      .then(() => {
        res.status(200).send("successfully deleted from the database");
      })
      .catch((err) =>
        res
          .status(400)
          .send(
            "Unable to delete the command, please check the entered id and try again."
          )
      );
  },
};
