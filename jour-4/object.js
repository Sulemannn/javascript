var cat = {
    name: "Garfield",
    age: 3,
    isCute: true, 
};

// affichez cat
console.log(cat);

// affichez valeur de age
console.log(cat.age);
console.log(cat["age"]);

// affichez so cute si c'est vrai
if (cat.isCute) {
    console.log("So cute !");
}