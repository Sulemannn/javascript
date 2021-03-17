function calculate(nmb1, nmb2, oper) {
    var a = parseInt(nmb1);
    var b = parseInt(nmb2);
    var rslt =0
    if (oper == "*") {
        rslt = a*b 
        console.log(rslt);
    }
    else if (oper == "+") {
        rslt = a+b 
        console.log(rslt);
    }
    else if (oper == "-") {
        rslt = a-b 
        console.log(rslt);
    }
    else if (oper == "/") {
        rslt = a/b 
        console.log(rslt);
    }
    else if (oper == "%") {
        rslt = a%b 
        console.log(rslt);
    }
    else {
        console.log(err);
        return;

    }
}
var num1 = process.argv[2];
console.log("num1",num1)
var num2 = process.argv[3];
console.log("num2",num2)
var oper = process.argv[4];
console.log("oper",oper)
calculate(num1, num2, oper)



