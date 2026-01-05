const searchButtonElement = document.getElementById("search-button");
const searchInputElement = document.getElementById("search-input");

searchButtonElement.addEventListener("click", () => {
  const searchInputValue = searchInputElement.value;
  console.log(searchInputValue);
});

async function loadData() {
  const response = await fetch("travel_recommendation_api.json");
  const data = await response.json();
}
loadData();
