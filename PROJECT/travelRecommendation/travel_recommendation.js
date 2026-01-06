const searchButtonElement = document.getElementById("search-button");
const searchInputElement = document.getElementById("search-input");
const searchResultsElement = document.querySelector(".SearchResults");
const clearButtonElement = document.querySelector("#clear-button");

let travelData = [];

searchButtonElement.addEventListener("click", handleSearch);
clearButtonElement.addEventListener("click", handleClear);

function handleClear() {
  searchResultsElement.innerHTML = "";
}

function handleSearch() {
  const searchInputValue = searchInputElement.value;
  const query = searchInputValue.trim().toLowerCase();

  const results = travelData.filter((item) => {
    return item.name.toLowerCase().includes(query);
  });

  results.forEach((result) => {
    const resultCardElement = document.createElement("li");
    resultCardElement.classList.add("ResultCard");
    resultCardElement.innerHTML = `
    <img src="${result.imageUrl}" />
    <p>${result.name}</p>
    <p>${result.description}</p>
    `;
    searchResultsElement.appendChild(resultCardElement);
  });
}

async function loadData() {
  const response = await fetch("travel_recommendation_api.json");
  travelData = await response.json();

  const cities = [];

  travelData.countries.forEach((country) => {
    cities.push(...country.cities);
  });

  travelData = [...cities, ...travelData.temples, ...travelData.beaches];
}

loadData();
