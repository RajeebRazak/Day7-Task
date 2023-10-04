var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v2/all");

request.send();

request.onload = function () {
    var result = JSON.parse(request.response);

    console.log(result);

    var usDollarCountry = null;

    for (var i = 0; i < result.length; i++) {
        var currencies = result[i].currencies;
        for (var j = 0; j < currencies.length; j++) {
            if (currencies[j].code === "USD") {
                usDollarCountry = result[i].name;
                break;
            }
        }
        if (usDollarCountry) {
            break;
        }
    }

    if (usDollarCountry) {
        console.log("Country that uses US Dollars:", usDollarCountry);
    }
}
