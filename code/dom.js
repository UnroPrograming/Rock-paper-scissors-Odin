import { getComputerChoice, compareChoices } from './rockPaperScissors.js';

//#region -> Propiedades

const buttons = document.querySelectorAll(".btn-play");

const mainTxt = document.querySelector(".main-text");
const mainSubTxt = document.querySelector(".main-sub_text");

const playerScoreTxt = document.querySelector(".player-score");
const cpuScoreTxt = document.querySelector(".cpu-score");

const playerChoiceImg = document.querySelector("#player-choice");
const cpuChoiceImg = document.querySelector("#cpu-choice");

let playerPoints = 0;
let cpuPoints = 0;

//#endregion

//#region -> Events

buttons.forEach(button => {
    button.addEventListener("click", () => {
        playRound(button);
    });
});

//#endregion

/**
 * Empieza una ronda del juego
 * @param {HTMLButtonElement} button 
 */
function playRound(button) {
    let playerChoice = button.id;
    let cpuChoice = getComputerChoice();

    changeplayerImg(playerChoice);
    changeCpuImg(cpuChoice);

    let roundResult = compareChoices(playerChoice, cpuChoice);
    
    changeScoreTxt(roundResult, playerChoice, cpuChoice);
}

/**
 * Cambio de imagen para playero
 * @param {string} playerChoice 
 */
function changeplayerImg(playerChoice) { 
    switch(playerChoice) {
        case "Rock":
            playerChoiceImg.src = "img/piedra_player.png";
            break;    
        case "Paper":
            playerChoiceImg.src = "img/papel_player.png";
            break;
        case "Scissors":
            playerChoiceImg.src = "img/tijeras_player.png";
            break;
    }
}

/**
 * Cambio de imagen para cpu
 * @param {string} computersChoice 
 */
function changeCpuImg(computersChoice) { 
    switch(computersChoice) {
        case "Rock":
            cpuChoiceImg.src = "img/piedra_cpu.png";
            break;
        case "Paper":
            cpuChoiceImg.src = "img/papel_cpu.png";
            break;
        case "Scissors":
            cpuChoiceImg.src = "img/tijeras_cpu.png";
            break;
    }
}

/**
 * Cambio se textos en funcion del resultado y de los scores
 * @param {string} result 
 */
function changeScoreTxt(result, playerChoice, cpuChoice) {
    let sub_text = playerChoice;

    switch (result) {
        case "Draw":
            mainTxt.textContent = "It's a tie!";
            sub_text += " ties with ";

            break;

        case "Player":
            mainTxt.textContent = "You won!";
            sub_text += " beats ";

            playerPoints++;
            playerScoreTxt.textContent = playerPoints;

            break;

        case "Cpu":
            mainTxt.textContent = "You lost!";
            sub_text += " loses against";

            cpuPoints++;
            cpuScoreTxt.textContent = cpuPoints;

            break;
    }

    sub_text += cpuChoice;
    mainSubTxt.textContent = sub_text;
}
