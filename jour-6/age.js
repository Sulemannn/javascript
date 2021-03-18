// 02 - Age

// - Créez une fonction `calculateAge` qui reçoit en paramètre une date au format string (qui sert de date de naissance)
// - La fonction doit calculer l'âge de la personne (en années) née a ce moment là, en fonction de la date d'aujourd'hui
// - Appelez la fonction et affichez son résultat dans la console

function calculateAge(str) {
    var demo = new Date().getFullYear();
    //console.log(demo);
    var année = parseInt(str.slice(6, 10))
    //console.log(anne)
    var age = demo - année
    console.log("Tu as",age,"ans !")

}
calculateAge("01/08/2000")