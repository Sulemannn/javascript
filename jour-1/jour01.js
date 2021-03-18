console.log("Hello World !");
// -----------------------------------------------------------
var test;
test = "My name is Suleman";

console.log(test);
// ------------------------------------------------------------
var name;

name = "Suleman";

console.log("Nice to meet you " + name)
// ---------------------------------------------------------------

var testLength;
testLength = "I'm very long !"

console.log(testLength.length);
// ----------------------------------------------------------------

var food;

food = "croissant is meh";

food = food.replace("meh", "so good");

console.log(food);

// ----------------------------------------------------------------

var basic;

basic = "This is Cool";

var basicUp = basic.toUpperCase()

var basicDown = basic.toLowerCase()

console.log(basic  + basicUp  + basicDown) 

// ------------------------------------------------------------------------

var word;

word = "banana";

var letters = word.split("")

console.log(letters);

// --------------------------------------------------------------------

var age = 21;

var template = "I'm 21 years old"

console.log(`I'm ${age} years old`);

// -----------------------------------------------------------------------------------

var changed;

changed = "Bonjour";
changed = changed.replace(/o/g,"a")

console.log(changed)