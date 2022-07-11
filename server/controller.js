const commands = require("./db.json");
const commandId = 14;

module.exports = {
  // getPage: (req, res) => {
  //   const value = req.params.value;
  //   if (value === "By Week") {
  //     res.send(
  //       "https://www.lifehack.org/articles/productivity/6-ways-highly-productive-night.html"
  //     );
  //   } else if (value === "By Subject") {
  //     res.send("https://www.oberlo.com/blog/productive-morning-routine");
  //   } else {
  //     res.send("https://fluentworlds.com");
  //   }
  // },
  getCommands: (req, res) => {
    res.status(200).send(commands);
  },
};
