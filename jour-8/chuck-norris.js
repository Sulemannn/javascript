function getFact() {
    request.get("https://api.chucknorris.io/jokes/random", function(error, response, body) {
        var fact = JSON.parse(body);
        console.log(fact.value);
    });
}

getFact();