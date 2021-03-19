var students = ["Mehdi", "Asma", "Moncef", "Fethy", "Ikram", "Lionel"]; // 6

// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);
// console.log(students[3]);
// console.log(students[4]);
// console.log(students[5]);

var min = 0;
var max = students.length - 1;

var random = Math.random(); // 0 inclus et 1 exclu

var indexRandom = Math.floor(random * (max + 1));

console.log(students[indexRandom])