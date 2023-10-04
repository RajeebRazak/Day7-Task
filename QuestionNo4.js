var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v2/all");

request.send();

request.onload = function () {
    var result = JSON.parse(request.response);

    // Step 1: Extract the population of each country
    var populations = result.map((country) => country.population);

    // Step 2: Use reduce to calculate the total population
    var totalPopulation = populations.reduce((acc, population) => acc + population, 0);

    console.log("Total Population:", totalPopulation);
};
