const getCommandsBySubject = () => {
  axios
    .get("/api/bysubject")
    .then((res) => {
      console.log(res);
      res.data.forEach((elem) => {
        const commElem = `
        <tr>
         <th class="subj">${elem.subject}</th>
          <th class="comm-nam">${elem.command_name}</th>
          <th class="commz">${elem.command}</th>
          <th class="comm-des">${elem.command_description}</th>
          <th>${elem.week}</th>
          <th>${elem.required_for_code_to_function}</th>
          <th>${elem.required_parameters_or_arguments}</th>
          <th>${elem.optional_parameters}</th>
       
        </tr>`;
        const subList = document.querySelector(".subject-container");
        subList.innerHTML += commElem;
      });
    })
    .catch((err) => console.log(err));
};
