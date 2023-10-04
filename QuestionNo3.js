var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v2/all");

request.send();

request.onload = function() {
    var result = JSON.parse(request.response);
    
    result.forEach(function(country) {
        console.log("Name: " + country.name);
        console.log("Capital: " + country.capital);
        console.log("Flag: " + country.flags[0]);
        
    });
}
