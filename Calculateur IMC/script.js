function calculerIMC(poids, taille) {

    // Convertion de la taille en centimètres, en mètres.
    let tailleEnMetres = taille / 100;

    // Calcule la taille puissance 2
    let tailleCalculee = Math.pow(tailleEnMetres, 2);

    // Calcule l'IMC
    let resultat = poids / tailleCalculee;
    return resultat;

}

let poids = prompt("Quel est votre poids ? (en kg)");
let taille = prompt("Quelle est votre taille ? (en cm)");

alert(calculerIMC(poids, taille));