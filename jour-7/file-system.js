// FILE SYSTEM

var fs = require("fs");

console.log("on va afficher ce qui est contenu dans Jour-7 : file-system.txt");

fs.readFile("./file-system.txt", function (err, data) {
    if (err){
        return console.error(err);
    }

    console.log("Lecture après conversition en string: ",data.toString());
})