const createForm = document.querySelector("#create-card");
const commList = document.querySelector("#return-all");
const deleteForm = document.querySelector("#delete-form");
const updateForm = document.querySelector("#update-form");
const getAll = document.querySelector("#get-all");

const createCommand = () => {
  const ccInputs = document.querySelectorAll(".cc-input");
  const body = {
    command: ccInputs[0],
    command_name: ccInputs[1],
    command_description: ccInputs[2],
    week: ccInputs[3],
    subject: ccInputs[4],
    required_for_code_to_function: ccInputs[5],
    required_parameters_or_arguments: ccInputs[6],
    optional_parameters: ccInputs[7],
  };
  axios
    .post("/createcommand", body)
    .then((res) => {
      alert(res.data);
      ccInputs.forEach((ccInputs) => (ccInputs.value = ""));
    })
    .catch((err) => {
      alert(err.response.data);
      ccInputs.forEach((ccInputs) => (ccInputs.value = ""));
    });
};
const updateCommand = () => {
  const upInputs = document.querySelectorAll(".update-inputs");
  const body = {
    command: upInputs[1],
    command_name: upInputs[2],
    command_description: upInputs[3],
    week: upInputs[4],
    subject: upInputs[5],
    required_for_code_to_function: upInputs[6],
    required_parameters_or_arguments: upInputs[7],
    optional_parameters: upInputs[8],
  };
  axios
    .put(`/updatecommand/${id}`, body)
    .then((res) => {
      alert(res.data);
      upInputs.forEach((upInputs) => (upInputs.value = ""));
    })
    .catch((err) => {
      alert(err.response.data);
      upInputs.forEach((upInputs) => (upInputs.value = ""));
    });
};
const deleteCommand = () => {
  const delInputs = document.querySelectorAll(".delete-inputs");
  const id = delInputs[0].value;
  axios
    .delete(`/deletecommand/${id}`)
    .then((res) => {
      alert(res.data);
      delInputs.forEach((delInputs) => (delInputs.value = ""));
    })
    .catch((err) => {
      alert(err.response.data);
      delInputs.forEach((delInputs) => (delInputs.value = ""));
    });
};

const getCommandsFeat = () => {
  axios
    .get("http://localhost:3005/api/features")
    .then((res) => {
      console.log(res);
      res.data.forEach((elem) => {
        const newElem = `
        <tr>
          <th>${elem.command_id}</th>
          <th>${elem.command}</th>
          <th>${elem.command_name}</th>
          <th>${elem.command_description}</th>
          <th>${elem.week}</th>
          <th>${elem.subject}</th>
          <th>${elem.required_for_code_to_function}</th>
          <th>${elem.required_parameters_or_arguments}</th>
          <th>${elem.optional_parameters}</th>
        </tr>`;
        commList.innerHTML += newElem;
      });
    })
    .catch((err) => {
      alert(err.response.data);
    });
};

//I need to set up a .get after the post to be able to put all of the stuff into the table below which is  #return-all

createForm.addEventListener("submit", (e) => {
  e.preventDefault();
  createCommand();
});
updateForm.addEventListener("submit", (e) => {
  e.preventDefault();
  updateCommand();
});
deleteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  deleteCommand();
});
getAll.addEventListener("click", (e) => {
  e.preventDefault();
  getCommandsFeat();
});
