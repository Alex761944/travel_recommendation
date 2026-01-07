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
  const query = searchInputElement.value.trim().toLowerCase();

  searchResultsElement.innerHTML = "";

  let results = [];

  if (query === "beach") {
    results = travelData.beaches;
  }

  if (query === "temple") {
    results = travelData.temples;
  }

  if (query === "country") {
    results = [];

    travelData.countries.forEach((country) => {
      country.cities.forEach((city) => {
        results.push(city);
      });
    });
  }

  results.forEach((result) => {
    const resultCardElement = document.createElement("li");
    resultCardElement.classList.add("ResultCard");

    resultCardElement.innerHTML = `
      <img src="${result.imageUrl}" alt="${result.name}">
      <p>${result.name}</p>
      <p>${result.description}</p>
    `;

    searchResultsElement.appendChild(resultCardElement);
  });
}

async function loadData() {
  const response = await fetch("travel_recommendation_api.json");
  travelData = await response.json();
  console.log(travelData);
}

loadData();
