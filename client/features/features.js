const createForm = document.querySelector("#create-card");
const commList = document.querySelector("#return-all");
const deleteForm = document.querySelector("#delete-form");
const updateForm = document.querySelector("#update-form");
const getAll = document.querySelector("#get-all");

const createCommand = () => {
  const ccInputs = document.querySelectorAll(".cc-input");
  console.log(typeof ccInputs[5].value);
  const body = {
    command: ccInputs[0].value,
    command_name: ccInputs[1].value,
    command_description: ccInputs[2].value,
    week: ccInputs[3].value,
    subject: ccInputs[4].value,
    required_for_code_to_function: ccInputs[5].value === "on",
    required_parameters_or_arguments: ccInputs[6].value,
    optional_parameters: ccInputs[7].value,
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
    command_id: upInputs[0].value,
    command: upInputs[1].value,
    command_name: upInputs[2].value,
    command_description: upInputs[3].value,
    week: upInputs[4].value,
    subject: upInputs[5].value,
    required_for_code_to_function: upInputs[6].value === "on",
    required_parameters_or_arguments: upInputs[7].value,
    optional_parameters: upInputs[8].value,
  };
  const id = upInputs[0].value;
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
    .get("/api/features")
    .then((res) => {
      console.log(res);
      res.data.forEach((elem) => {
        const newElem = `
        <tr>
          <th class=telems>${elem.command_id}</th>
          <th class=telems>${elem.command}</th>
          <th class=telems>${elem.command_name}</th>
          <th class=telems>${elem.command_description}</th>
          <th class=telems>${elem.week}</th>
          <th class=telems>${elem.subject}</th>
          <th class=telems>${elem.required_for_code_to_function}</th>
          <th class=telems>${elem.required_parameters_or_arguments}</th>
          <th class=telems>${elem.optional_parameters}</th>
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
