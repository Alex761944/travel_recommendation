const searchButtonElement = document.getElementById("search-button");
const searchInputElement = document.getElementById("search-input");

let travelData = [];

searchButtonElement.addEventListener("click", () => {
  const searchInputValue = searchInputElement.value;
});

async function loadData() {
  const response = await fetch("travel_recommendation_api.json");
  travelData = await response.json();
}

loadData();
