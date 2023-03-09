// Déclaration des variables globales
let firstNumber = '';
let operator = '';
let secondNumber = '';
let result = false;

// Initialisation of our eventListeners
 function init() {

    // Récupération de chaque boutton 
    const intButtons = document.querySelectorAll('.calc-button-number');
    const operatorButtons = document.querySelectorAll('.calc-button-operator');
    const clearButton = document.querySelector('.clear');
    const eraseButton = document.querySelector('.erase');
    const resultButton = document.querySelector('.equal');
    const classSetter = document.querySelectorAll('button');
    
    // Gestion des écouteurs d'évenements
    for (const int of intButtons) {
        int.addEventListener('click', handleInteger);
    }
    for (const ope of operatorButtons) {
        ope.addEventListener('click', handleOperator);
    }
    resultButton.addEventListener('click', handleResult);
    eraseButton.addEventListener('click', handleErase);
    clearButton.addEventListener('click', handleClear);

    for (const button of classSetter) {
        button.addEventListener('click', textSize);
    }
    
}

function handleInteger(event) {
    // Récuperation des elements screen et de la valeur du bouton int cliqué
    const screen = document.querySelector('#screen').children[0];
    let valueInt = event.currentTarget.value;

    // Gestion des erreurs 
    if (screen.textContent == 'NaN') {
        return
    }
  
    if (result !== false) {
        return
    }
    
    if (screen.textContent == 'false') {
        screen.textContent = 'NaN';
        return
    }
    // Condition de vidage si un operateur à été saisi alors on vide l'ecran pour afficher les chiffres cliqués
    if (screen.textContent == operator){
        screen.textContent = '';
    }

    // Condition pour limiter le dot à 1 maximum par screen
    if (screen.textContent.includes('.') && valueInt == '.' ) {
        valueInt = '';
    }

    // Ajout de la valeur du boutton int à la fin du screen
    screen.textContent += valueInt;

    // Gestion des conditions de remplissage du firstNumber ou secondNumber
    if (firstNumber.length >= 1 && operator !== '') {
        secondNumber = screen.textContent;
    } else if (operator == '') {
        firstNumber = screen.textContent;
    }
}

function handleOperator(event) {
    // Récuperation des elements screen
    const screen = document.querySelector('#screen').children[0];
    const valueOperator= event.currentTarget.value;

    // Si on a deja fais un result alors on stop la fonction
    if (result !== false) {
        return
    }
    // Si l'ecran comporte une erreur alors on arrete la fonction 
    if (screen.textContent == 'NaN') {
        return
    }
    if (screen.textContent == 'false') {
        screen.textContent = 'NaN';
        return
    }
    // On retire la classe minus pour l'operateur
    screen.classList.remove('minus');

    // Stockage de l'opérateur
    operator = valueOperator;

    // Affichge du contenu sur le screen
    screen.textContent = valueOperator;
}   

function handleResult() {
    // Récupération de l'élément screen
    const screen = document.querySelector('#screen').children[0];

    // Condition d'opération en fonction de l'opérateur selectionné et modification 
    if (operator == '-') {
        result = parseFloat(firstNumber) - parseFloat(secondNumber);
    } else if (operator == '+') {
        result = parseFloat(firstNumber) + parseFloat(secondNumber);
    } else if (operator == '*') {
        result = parseFloat(firstNumber) * parseFloat(secondNumber);
    } else if (operator == '/') {
        result = parseFloat(firstNumber) / parseFloat(secondNumber);
    }
    screen.textContent = result.toString();

    // On rempli firstnumber avec notre valeur à l'ecran et on vide les autres pour pouvoir continuer à calculer
    firstNumber = screen.textContent;
    operator = "";
    secondNumber = "";
    result = false;
}

function handleErase() {
    // Récupération de l'élément screen
    const screen = document.querySelector('#screen').children[0];

    // Si on a deja fais un result alors on stop la fonction
    if (result !== false) {
        return
    }
    // Si l'ecran comporte une erreur alors on arrete la fonction 
    if (screen.textContent == 'NaN') {
        return
    }
    if (screen.textContent == 'false') {
        screen.textContent = 'NaN';
        return
    }
    // Supression du dernier element de la chaine de caractère
    screen.textContent = screen.textContent.slice(0, -1);
}

function handleClear() {
    // Récupération de l'élément screen
    const screen = document.querySelector('#screen').children[0];

    // Vidage de toute les données enregistrées 
    screen.textContent = '';
    firstNumber = '';
    operator = '';
    secondNumber = '';
    result = false;
}

function textSize() {
    // Récupération de l'élément screen
    const screen = document.querySelector('#screen').children[0];

    // Condition pour la longueur de la chaine de charactères contenue dans le screen 
    // if (screen.innerHTML.length > 15) {
    //     screen.textContent = screen.textContent.slice(0, -1);
    //     } 
        if (screen.innerHTML.length > 9) {
                screen.classList.add('minus');
        } else {
                screen.classList.remove('minus');
        }
} 

// Lancement de la fonction init au chargement complet de la page
addEventListener('DOMContentLoaded', init);