var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v2/all");

request.send();

request.onload = function () {
    var result = JSON.parse(request.response);

    // Filter countries with population less than 2 lakhs
    var countriesWithLessThan2Lakhs = result.filter(function (country) {
        return country.population < 200000;
    });

    // Extract names of these countries
    var countryNames = countriesWithLessThan2Lakhs.map(function (country) {
        return country.name;
    });

    console.log(countryNames);
}
