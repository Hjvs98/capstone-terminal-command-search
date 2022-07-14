const searchForm = document.querySelector(".search-form");
const byWeek = document.querySelector("#by-week");
const weekBtn = document.querySelector("#by-week-btn");
const subBtn = document.querySelector("#by-sub-btn");

const getCommandsByWeek = () => {
  axios.get("/byweek").then((res) => {
    const data = res.data;
    data.forEach((element) => {
      const week1Container = document.getElementById("#week-1");
      const week2Container = document.getElementById("#week-2");
      const weeklyCommands = document.createElement("ul");
      weeklyCommands.innerHTML = `<li class="command-names-bw">${command.command_name}</li>
              <li>${command.command}</li> <li>${command.command_description}</li>`;
      if (element.week === 1) {
        week1Container.appendChild(weeklyCommands);
      } else if (element.week === 2) {
        week2Container.appendChild(weeklyCommands);
      }
    });
  });
};
weekBtn.addEventListener("click", getCommandsByWeek);
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

// const getPage = (e) => {
//   console.log(e);
//   e.preventDefault();
//   axios.get(`http://localhost:3005/${e.target.id}`).then((res) => {
//     const data = res.data;
//     location.href = data;
//   });
// };
// weekBtn.addEventListener("click", getPage);
// subBtn.addEventListener("click", getPage);
