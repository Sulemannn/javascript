function multiply(nmb){
    if(typeof(num) == "number"  && process.argv.length == 3 ){
        var a =parseInt(num);
        var result =0
        for(var i = 0; i <= 10; i++){
            result = i*a
            console.log(num,"*",i,"=", result)
        }
    }
    else{
        console.log("error")
    }
}

var num = parseInt(process.argv[2])
multiply(num)