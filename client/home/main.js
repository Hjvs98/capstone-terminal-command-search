const searchForm = document.querySelector(".search-form");

// const getCommandsByWeek = () => {
//   axios.get("/byweek").then((res) => {
//     const data = res.data;
//     data.forEach((element) => {
//       element.preventDefault();
//       const week1Container = document.getElementById("#week-1");
//       const week2Container = document.getElementById("#week-2");
//       const weeklyCommands = document.createElement("div");
//       weeklyCommands.textContent = `<p> class="command-names-bw">${element.command_name}</p>
//               <p> class="command-names-bw">${element.command}</p> <p> class="command-names-bw">${element.command_description}</p>`;
//       if (element.week === 1) {
//         week1Container.appendChild(weeklyCommands);
//       } else if (element.week === 2) {
//         week2Container.appendChild(weeklyCommands);
//       }
//     });
//   });
// };
// weekBtn.addEventListener("click", getCommandsByWeek);

// const getPage = (e) => {
//   axios
//     .get(`http://localhost:3005/${e.target.value}`)
//     .then((res) => {
//       console.log(res);
//       const data = res.data;
//       location.href = data;
//     })
//     .catch((err) => console.log(err));
// };
// weekBtn.addEventListener("click", getPage);
// subBtn.addEventListener("click", getPage);
// featBtn.addEventListener("click", getPage);

// subBtn.addEventListener("click", getPage);
// featBtn.addEventListener("click", getPage);
//const someArr = []; --> set up an array to hold the information you want to display as elements
//data.map((command) => {                 --> map through the array returned from axios and for each command do...?
//   someArr.push(command.command)
// someArr.push(command.week);
//someArr.push(command.require_for_code_to_function)
//})
//const page = document.getElementById('#someID) --> get the element that holds all of the command elements
//someArr.forEach((itemInArray) => {    --> loop through the command values in someArr and make an element for them. Then put them in the element as textContent or whatever you want. Append it to the container element.
//    const displayContainer = document.createElement("div")
// displayContainer.textContent = itemInArray
// })

//     const dataToDisplay = (
//       <div>
//         <p>data[0].command_name</p>
//         <p>data[1].command</p>
//         <p>data[2].command_description</p>
//       </div>
//     );
//   });
// };
