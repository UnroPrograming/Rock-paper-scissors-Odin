import { getComputerChoice, compareChoices } from './rockPaperScissors.js';

const buttons = document.querySelectorAll(".btn-play");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        playRound(button);
    });
});


/**
 * Empieza una ronda del juego
 * @param {HTMLButtonElement} button 
 */
function playRound(button) {
    let humansChoice = button.id;
    let computersChoice = getComputerChoice();

    let roundResult = compareChoices(humansChoice, computersChoice);

    console.log(`Humans choice ----> ${humansChoice}`);
    console.log(`Machine choice ----> ${computersChoice}`);
    console.log("---------------------------------------------------------------");
    console.log(`Result ----> ${roundResult}`);
}

