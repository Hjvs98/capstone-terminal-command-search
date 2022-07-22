const weekOne = document.querySelector("#week-1");
const weekTwo = document.querySelector("#week-2");
const weekThree = document.querySelector("#week-2");
const weekFour = document.querySelector("#week-2");
const weekFive = document.querySelector("#week-2");
const weekSix = document.querySelector("#week-2");
const weekSeven = document.querySelector("#week-2");
const weekEight = document.querySelector("#week-2");
const weekNine = document.querySelector("#week-2");
const weekTen = document.querySelector("#week-2");
const weekEleven = document.querySelector("#week-2");
const weekTwelve = document.querySelector("#week-2");
const weekThirteen = document.querySelector("#week-2");
const weekFourteen = document.querySelector("#week-2");
const weekFifteen = document.querySelector("#week-2");
const weekSixteen = document.querySelector("#week-2");

const getCommandsByWeek = () => {
  axios
    .get("/api/byweek")
    .then((res) => {
      res.data.forEach((elem) => {
        const commElem = `<table class="week-display" cellspacing="20px">
        <tr>
        <th class="telems">${elem.command_name}</th>
        <th class="spacers" id="spacer-1">|</th>
        <th class="telems">${elem.command}</th>
        <th class="spacers id="spacer-2">|</th>
        <th class="telems">${elem.command_description}</th>
        <th class="spacers id="spacer-3">|</th>
        <th class="telems">${elem.subject}</th>
        <th class="spacers id="spacer-4">|</th>
        <th class="telems">${elem.required_for_code_to_function}</th>
        <th class="spacers id="spacer-5">|</th>
        <th class="telems">${elem.required_parameters_or_arguments}</th>
        <th class="spacers id="spacer-6">|</th>
        <th class="telems">${elem.optional_parameters}</th>
        </tr>
      </table>`;
        if (elem.week === 1) {
          weekOne.innerHTML += commElem;
        } else if (elem.week === 2) {
          weekTwo.innerHTML += commElem;
        } else if (elem.week === 3) {
          weekThree.innerHTML += commElem;
        } else if (elem.week === 4) {
          weekFour.innerHTML += commElem;
        } else if (elem.week === 5) {
          weekFive.innerHTML += commElem;
        } else if (elem.week === 6) {
          weekSix.innerHTML += commElem;
        } else if (elem.week === 7) {
          weekSeven.innerHTML += commElem;
        } else if (elem.week === 8) {
          weekEight.innerHTML += commElem;
        } else if (elem.week === 9) {
          weekNine.innerHTML += commElem;
        } else if (elem.week === 10) {
          weekTen.innerHTML += commElem;
        } else if (elem.week === 11) {
          weekEleven.innerHTML += commElem;
        } else if (elem.week === 12) {
          weekTwelve.innerHTML += commElem;
        } else if (elem.week === 13) {
          weekThirteen.innerHTML += commElem;
        } else if (elem.week === 14) {
          weekFourteen.innerHTML += commElem;
        } else if (elem.week === 15) {
          weekFifteen.innerHTML += commElem;
        } else if (elem.week === 16) {
          weekSixteen.innerHTML += commElem;
        }
      });
    })
    .catch((err) => console.log(err));
};
//window.addEventListener("load", getCommandsByWeek);
