
function calculate(num1, oper, num2){

    var a = parseInt(num1);
    var b = parseInt(num2);
    var oper = operator;
    var calcul = a + oper + b;

    console.log(calcul);

    if (oper === "*"){
        console.log("a*b", a*b);
    }
    else if(oper === "+"){
        console.log("a+b", a+b);
    }
    else if(oper === "-"){
        console.log("a-b", a-b);
    }
    else if(oper === "/"){
        console.log("a/b", a/b);
    }
    else if(oper === "%"){
        console.log("a%b", a%b);
    }
    else {
        console.log("error");        
    }
​
}
​
calculate(5, x, 4);