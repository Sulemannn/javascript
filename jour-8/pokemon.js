// // À l'aide de la superbe [PokeAPI](https://pokeapi.co/) (bien lire la documentation) :

// // - Créez une fonction asynchrone `catchPokemon` qui recevra un nombre en paramètre 
// (il correspondra à l'id d'un pokemon) et qui récupèrera le pokemon correspondant à cet 
// id. Elle affichera ensuite dans la console :

// id: xxx // remplacer xxx par l'id du pokemon
// name: "xxx" // remplacer xxx par le nom du pokémon

var request = require('request')

function catchPokemon(id) {
    request.get(


        "https://pokeapi.co/api/v2/pokemon/" + id,

        function (err, res, body) {
            // console.log(body);
            var pokemon = JSON.parse(body)

            console.log(pokemon.name);


        }

    )

};

catchPokemon(1); // bulbasaur
catchPokemon(25); //pikachu