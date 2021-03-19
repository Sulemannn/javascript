var cat = {
    name: "Garfield",
    age: 3,
    isCute: true, 
};

var cat2 = {
    name: "Félix",
    age: 5,
    isCute: false,
    // properties: {
    //     color: "black & white",
    //     jump: 15
    // }
};

var cats = [cat, cat2];

// console.log(cats)

console.log("Age of cat", cat.age)
console.log("Age of cat 2", cats[0].age)


console.log("cat2 isCute? ", cat2.isCute);
console.log("cat2 isCute? 2", cat2["isCute"])
console.log("cat2 isCute? 3", cats[1].isCute)
console.log("cat2 isCute? 4", cats[1]["isCute"])

var keyName = "isCute"
console.log("cat2 isCute? 5", cat2[keyName])
console.log("cat2 isCute? 6", cats[1][keyName])