let nombreAffiche = "";

function addition(a, b) {
    return a + b;
}

function multiplication(a, b) {
    return a * b;
}

function soustraction(a, b) {
    return a - b;
}

function division(a, b) {
    if (b == 0) {
        alert("can't divide by 0");
        return null;
    } else {
        return a / b;
    }
}

function afficheur() {
    let affichage = document.querySelector("#display");
    affichage.value = nombreAffiche;
}

function appendToDisplay(chiffre) {
    nombreAffiche += chiffre;
    afficheur();
}

function ajouterSigne(signe) {
    nombreAffiche += signe;
    afficheur();
}

function clearDisplay() {
    nombreAffiche = "";
    afficheur();
}

function calculateResult() {
    let affichage = document.querySelector("#display");
    let nombre = nombreAffiche.split(/([+\-*\/])/);
    if (nombre.length !== 3) {
        alert("Erreur de syntaxe.");
        return;
    }
    let nombre1 = parseFloat(nombre[0]);
    let nombre2 = parseFloat(nombre[2]);
    let operateur = nombre[1];

    if (operateur === "+") {
        affichage.value = `${addition(nombre1, nombre2)}`;
    } else if (operateur === "-") {
        affichage.value =`${soustraction(nombre1, nombre2)}`;
    } else if (operateur === "*") {
        affichage.value =`${multiplication(nombre1, nombre2)}`;
    } else if (operateur === "/") {
        let result = division(nombre1, nombre2);
        if (result !== null) {
            affichage.value =`${result}`;
        }
    } else {
        alert("Non reconnu");
    }
}