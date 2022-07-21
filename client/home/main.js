const searchForm = document.querySelector(".search-form");
const seedBtn = document.getElementById("seed-btn");

const dbSeeding = () => {
  axios
    .get("http://localhost:3005/seed")
    .then((res) => {
      alert(res.data);
    })
    .catch((err) => {
      alert(err.response.data);
    });
};
seedBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dbSeeding();
});
