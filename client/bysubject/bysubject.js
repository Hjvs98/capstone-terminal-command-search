const getCommandsBySubject = () => {
  axios
    .get("http://localhost:3005/api/bysubject")
    .then((res) => {
      console.log(res);
      res.data.forEach((elem) => {
        const commElem = `<table class="subject-display">
        
        <tr>
         <th>${elem.subject}</th>
          <th>${elem.command_name}</th>
          <th>${elem.command}</th>
          <th>${elem.command_description}</th>
        </tr>
          
        </table>`;
        const subList = document.querySelector(".subject-container");
        subList.innerHTML += commElem;
      });
    })
    .catch((err) => console.log(err));
};
// window.addEventListener("load", getCommandsBySubject);
