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
         ('cd required argument', 'change directory', 'go to a different directory or file', 1, 'file management', true, 'what file or directory you want to navigate to', null),
         ('pwd', 'present working directory', 'tell you where you are in the filesystem', 1, 'file management', false, null, null), 
         ('touch required argument', 'touch', 'creates a new file', 1, 'file management', false, 'the new name for the file', null),
         ('cat required argument', 'concatenate', 'prints out the contents of the file', 1, 'file management', false, 'name of file you want to view', null),
         ('mv argument 1 argument 2', 'move file', 'used to move or rename a file', 1, 'file management', false, 'argument 1: what to rename it, argument 2: where to move it || argument 1: what to rename it, argument 2: what your renaming it', null),
         ('git init', 'git initialize', 'initializes a local repository in the folder you are currently working in.', 1, 'git, file management', true, null , null),
         ('git add required argument', 'git add', 'add some files to be tracked', 1, 'file management, git', true, 'file name || if you want to add all files in current directory/ file just type a period like this: git add .', null),
         ('git commit argument 1 "argument 2"', 'git commit', 'creates a snapshot of the files you just added or are tracking', 1, 'file management, git', true, '1st argument is what branch you are commiting the files to (usually will just be -m), 2nd argument is the name of the commit always in quotations', null),
         ('git status', 'git status', 'tells you about this repository you are currently working in', 1, 'file management, git', false,  null, null),
         ('git log', 'git log', 'shows you a list of the commits, in reverse order in the repository you are currently working in.', 1, 'file management, git', false,  null, null),
         ('git diff', 'git difference', 'tells you what you have changed since last commit on the repository you are currently working in', 1, 'file management, git', false,  null, null),
         ('node required parameter', 'run node', 'run node which runs your code', 2, 'running code , node', true, 'what file you want to run code for.', null),
         ('npm install -g nodemon', 'install nodemon', 'npm stands for node package manager and will install nodemon onto your computer', 7, 'running code, npm, node', true, null , null),
         ('npm install optional argument 2nd argument', 'install package', ' will install whichever package you want onto your computer', 7, 'running code, npm, node', true, 'the second argument is what package you want to install' , 'first argument is known as a flag which you can use to install something globally by using -g'),
         ('npm init -y', 'initialize packages', 'initializes a package.json and node_modules', 7, 'running code, npm, node', true, null , null),
         ('npm i argument 1', 'install packages', 'another syntax for npm install... will install whichever package you want onto your computer', 7, 'running code, npm, node', true, 'what package you want to install' , null);
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
