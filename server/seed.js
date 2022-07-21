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
  seed: (req, res) => {
    sequelize
      .query(
        `
        drop table commands;

        create table commands (
            command_id serial primary key, 
            command varchar(300),
            command_name varchar(100),
            command_description varchar(1000),
            week integer,
            subject varchar(100),
            required_for_code_to_function boolean,
            required_parameters_or_arguments varchar(300),
            optional_parameters varchar(300)
        );

        insert into commands (command, command_name, command_description, week, subject, required_for_code_to_function, required_parameters_or_arguments, optional_parameters)
        values ('ls', 'list', 'shows all the files/folder where you currently are', 1, 'file management', false, null, null),
         ('cd required parameter', 'change directory', 'go to a different directory or file', 1, 'file management', true, 'what file or directory you want to navigate to', null),
         ('node required parameter', 'run node', 'run node which runs your code', 2, 'running code', true, 'what file you want to run code for.', null);
       `
      )
      .then(() => {
        res.status(200).send("Database seeded succesfully!");
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send("Unable to seed database correctly.");
      });
  },
};
