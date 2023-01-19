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