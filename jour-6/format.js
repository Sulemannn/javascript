// 01 - Format

// - Créez une fonction `formatDate` qui reçoit en paramètre une string (au format aaaa-mm-jj)
// - La fonction doit renvoyer la date au format jj/mm/aaaa
// - Appelez la fonction et affichez son résultat dans la console

function formatDate(str) {

    var x = str.split("-").reverse().join("/")
    console.log(x)

}

formatDate("1999-04-03")
formatDate("1855-12-05")












