const getCommandsBySubject = () => {
  axios
    .get("http://localhost:3005/api/bysubject")
    .then((res) => {
      console.log(res);
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
// window.addEventListener("load", getCommandsBySubject);
