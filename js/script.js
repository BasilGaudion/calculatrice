let calculate = {
    // Function who initialize the script
    init: function() {
        calculate.clickListener()
    },

    // function that places an event listener on each button
     clickListener: function() {
        const screen = document.querySelector('.screen').addEventListener('click', calculate.handleClickCalcul);
        const clear = document.querySelector('.clear').addEventListener('click', calculate.handleClickCalcul);
        const arrow = document.querySelector('.arrow').addEventListener('click', calculate.handleClickCalcul);
        const divide = document.querySelector('.divide').addEventListener('click', calculate.handleClickCalcul);
        const seven = document.querySelector('.seven').addEventListener('click', calculate.handleClickCalcul);
        const eight = document.querySelector('.eight').addEventListener('click', calculate.handleClickCalcul);
        const nine = document.querySelector('.nine').addEventListener('click', calculate.handleClickCalcul);
        const multiply = document.querySelector('.multiply').addEventListener('click', calculate.handleClickCalcul);
        const four = document.querySelector('.four').addEventListener('click', calculate.handleClickCalcul);
        const five = document.querySelector('.five').addEventListener('click', calculate.handleClickCalcul);
        const six = document.querySelector('.six').addEventListener('click', calculate.handleClickCalcul);
        const substract = document.querySelector('.substract').addEventListener('click', calculate.handleClickCalcul);
        const one = document.querySelector('.one').addEventListener('click', calculate.handleClickCalcul);
        const two = document.querySelector('.two').addEventListener('click', calculate.handleClickCalcul);
        const three = document.querySelector('.three').addEventListener('click', calculate.handleClickCalcul);
        const add = document.querySelector('.add').addEventListener('click', calculate.handleClickCalcul);
        const zero = document.querySelector('.zero').addEventListener('click', calculate.handleClickCalcul);
        const equal = document.querySelector('.equal').addEventListener('click', calculate.handleClickCalcul);
     },

     handleClickCalcul: function(event) {
        event.preventDefault();
        
     }
}

document.addEventListener('DOMContentLoaded', calculate.init);