const getCommandsByWeek = () => {
  axios
    .get("http://localhost:3005/byweek")
    .then((res) => {
      res.data.forEach((elem) => {
        const commElem = `<div class="week-display">
        <p>${elem.command_name}</p>
        <p>${elem.command}</p>
        <p>${elem.command_description}</p>
        <p>${elem.week}</p>
      </div>`;
        // const subList = document.querySelector(".week-container");
        // subList.innerHTML += commElem; //////////////////adjust this code so it works.
      });
    })
    .catch((err) => console.log(err));
};
window.addEventListener("load", getCommandsByWeek);
