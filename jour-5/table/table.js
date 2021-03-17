var {multiply} = require("../exo3/table-utils")
var num =parseInt(process.argv[2])


if (typeof (num) == "number" && process.argv.length == 3) {
    
    multiply(num)

}

else{
    console.log("error")
}
