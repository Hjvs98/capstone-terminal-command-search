const getCommandsBySubject = () => {
  axios
    .get("http://localhost:3005/api/bysubject")
    .then((res) => {
      console.log(res);
      res.data.forEach((elem) => {
        const commElem = `
        <tr>
         <th class="subj">${elem.subject}</th>
          <th class="comm-nam">${elem.command_name}</th>
          <th class="commz">${elem.command}</th>
          <th class="comm-des">${elem.command_description}</th>
       
        </tr>`;
        const subList = document.querySelector(".subject-container");
        subList.innerHTML += commElem;
      });
    })
    .catch((err) => console.log(err));
};
