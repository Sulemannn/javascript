// ## - Countries

// À l'aide de l'url suivante : "[https://restcountries.eu/rest/v2/all](https://restcountries.eu/rest/v1/all)" :

// - Créez un array vide `countriesNames`
// - Créez une fonction asynchrone `getCountries` pour récupérer les pays et stocker leurs noms dans l'array
// - Afficher les noms des pays récupérés dans la console, séparés par un tiret

var countriesNames = []

var request = require("request");

request.get("https://restcountries.eu/rest/v2/name/all", function (err, res, body) {
    var firstCountry = JSON.parse(body);

        console.log("same currency between", firstCountry[0].name, "and", secondCountry[0].name,
				(firstCountry[0].currencies[0].code === secondCountry[0].currencies[0].code));
    });
