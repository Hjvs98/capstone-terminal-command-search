const getCommandsBySubject = () => {
  axios
    .get("http://localhost:3005/bysubject")
    .then((res) => {
      res.data.forEach((elem) => {
        const commElem = `<div class="subject-display">
          <p>${elem.command_name}</p>
          <p>${elem.command}</p>
          <p>${elem.command_description}</p>
          <p>${elem.subject}</p>
        </div>`;
        const subList = document.querySelector(".subject-container");
        subList.innerHTML += commElem;
      });
    })
    .catch((err) => console.log(err));
};
window.addEventListener("load", getCommandsBySubject);
