// const screen = document.querySelector('.screen p');
const buttons = document.querySelectorAll('.calc-button, .calc-button-double');
let currentValue = "0";

// We place an event listener at the click on each button 
for (const button of buttons) {
    button.addEventListener('click', event => {
        // console.log(event.target.textContent);
        const chiffres = event.target.textContent;
        console.log(chiffres);
        const screen = document.getElementById("screen");
        screen.textContent = chiffres;

        
    });
}

// const plus = document.getElementById("add");



// if (chiffres.className = "add") {
//     screen.textContent += currentValue;
// }




// const buttons = document.querySelectorAll('.calc-button');
// buttons.forEach(button => {
//     button.addEventListener('click', (e) => {
//         const value = e.target.value;
//         const classList = e.target.classList;

//         if (classList.contains('clear')) {
//             clear();
//         } else if (classList.contains('erase')) {
//             erase();
//         } else if (classList.contains('calc-button-number')) {
//             addNumber(value);
//         } else if (classList.contains('dot')) {
//             addDecimal();
//         } else if (classList.contains('operation')) {
//             setOperation(value);
//         } else if (classList.contains('equal')) {
//             calculate();
//         }
//     });
// });

// document.addEventListener('DOMContentLoaded', calculate.init);
