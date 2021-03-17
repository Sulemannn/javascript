
function multiply(number) {
    var nmbr = process.argv[2];
    var nmbr = parseInt(nmbr);

    for (var i = 1; i <= 10; i++) {
        console.log(nmbr * i);
    }

};

multiply();
