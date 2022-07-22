const getCommandsBySubject = () => {
  axios
    .get("/api/bysubject")
    .then((res) => {
      console.log(res);
      res.data.forEach((elem) => {
        const commElem = `
        <tr>
         <th class="telems">${elem.subject}</th>
          <th class="telems" >${elem.command_name}</th>
          <th class="telems" >${elem.command}</th>
          <th class="telems">${elem.command_description}</th>
          <th class="telems">${elem.week}</th>
          <th class="telems">${elem.required_for_code_to_function}</th>
          <th class="telems">${elem.required_parameters_or_arguments}</th>
          <th class="telems">${elem.optional_parameters}</th>
       
        </tr>`;
        const subList = document.querySelector(".subject-container");
        subList.innerHTML += commElem;
      });
    })
    .catch((err) => console.log(err));
};
