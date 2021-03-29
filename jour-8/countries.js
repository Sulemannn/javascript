// ## - Countries

// À l'aide de l'url suivante : "[https://restcountries.eu/rest/v2/all](https://restcountries.eu/rest/v1/all)" :

// - Créez un array vide `countriesNames`
// - Créez une fonction asynchrone `getCountries` pour récupérer les pays et stocker leurs noms dans l'array
// - Afficher les noms des pays récupérés dans la console, séparés par un tiret

function getCountries() {
  request.get("https://restcountries.eu/rest/v2/all", function(error, response, body) {
      var countries = JSON.parse(body);
      
      /*
      var countriesNames = [];
      for (var i = 0; i < countries.length; i++) {
          var country = countries[i];
          countriesNames.push(country.name);
      }
      console.log(countriesNames.join("-"));
      */

     var countriesNames = countries.map(function(element) {
         return element.name;
     })

     console.log(countriesNames.join("-"));
  });

}

getCountries();