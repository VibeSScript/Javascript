// Fonction pour additionner
function addition(nombreA, nombreB) {
    return nombreA + nombreB;
}

// Fonction pour multiplier
function multiplication(nombreA, nombreB) {
    return nombreA * nombreB;
}

// Fonction pour soustraire
function soustraction(nombreA, nombreB) {
    return nombreA - nombreB;
}

// Fonction pour diviser
function division(nombreA, nombreB) {
    if (nombreB == 0) {
        throw new Error("Impossible de diviser par 0.");
    }
    return nombreA / nombreB;
}

// Demande un choix tant que le choix est différent de 1,2,3,4 redemande ce qu'il y a de présent dans le DO {}
do {
    var choix = Number(prompt("Que souhaitez-vous faire ?\n\n 1 - Addition\n 2 - Multiplication\n 3 - Soustraction\n 4 - Division\n"));
} while (choix != 1 && choix != 2 && choix != 3 && choix != 4)

// Demande deux nombres tant que les ce ne sont pas des nombres la boucle ne sera pas validée donc la demande sera renouvelée
do {
    var premierNombre = Number(prompt("Entrez un premier nombre :"));
    var deuxiemeNombre = Number(prompt("Entrez un deuxième nombre : "));
} while (isNaN(premierNombre) || isNaN(deuxiemeNombre))

// Appelle la fonction choisie
try {
    switch (choix) {
        case 1:
            var resultat = addition(premierNombre, deuxiemeNombre);
            break;

        case 2:
            var resultat = multiplication(premierNombre, deuxiemeNombre);
            break;

        case 3:
            var resultat = soustraction(premierNombre, deuxiemeNombre);
            break;

        case 4:
            var resultat = division(premierNombre, deuxiemeNombre);
            break;

        default:
            throw new Error("Une erreur est survenue.");
    }

    // Affiche le résultat
    alert("Voici le résultat : " + resultat);
} catch (error) {
    alert(error); // Si une erreur est survenue, on affiche l'erreur
}