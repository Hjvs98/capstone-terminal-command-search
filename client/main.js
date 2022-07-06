const searchForm = document.querySelector(".search-form");
const byWeek = documednt.querySelector("#by-week");

const getCommands = () => {
  axios.get(__dirname, "../byweek.html").then((res) => {
    const data = res.data;
    location.href = data;
  });
};
byWeek.addEventListener("click", getCommands);
