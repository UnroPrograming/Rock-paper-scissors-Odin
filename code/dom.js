import { getComputerChoice, compareChoices } from './rockPaperScissors.js';

//#region -> Propiedades

const buttons = document.querySelectorAll(".btn-play");

const mainTxt = document.querySelector(".main-text");
const mainSubTxt = document.querySelector(".main-sub-text");

const playerScoreTxt = document.querySelector(".player-score");
const cpuScoreTxt = document.querySelector(".cpu-score");

const playerChoiceImg = document.querySelector("#player-choice");
const cpuChoiceImg = document.querySelector("#cpu-choice");

const overlayDiv = document.querySelector(".overlay");
const popUpTittleTxt = document.querySelector(".popup-txt");
const popUpPlayAgainBtn = document.querySelector(".popup-btn");

let playerPoints = 0;
let cpuPoints = 0;

const imgMap = {
  Rock: "img/piedra",
  Paper: "img/papel",
  Scissors: "img/tijeras"
};

//#endregion

//#region -> Events

buttons.forEach(button => {
    button.addEventListener("click", () => {
        playRound(button);
    });
});

popUpPlayAgainBtn.addEventListener("click", () => {
    playAgain();
});

//#endregion

/**
 * Empieza una ronda del juego
 * @param {HTMLButtonElement} button 
 */
function playRound(button) {
    let playerChoice = button.id;
    let cpuChoice = getComputerChoice();

    //Cambiamos las imágenes de la UI
    setChoiceImg(playerChoiceImg, playerChoice, "player");
    setChoiceImg(cpuChoiceImg, cpuChoice, "cpu");

    //Plantamos los resultados en la UI
    let roundResult = compareChoices(playerChoice, cpuChoice);
    changeScoreTxt(roundResult, playerChoice, cpuChoice);

    //Si alguno ha llegado a 5 puntos salta el popUp de gameOver
    if (playerPoints === 5)
        showGameOverPopUp("Player");
    else if (cpuPoints === 5)
        showGameOverPopUp("CPU");
}


/**
 * Cambia la imagen en la UI ("HTMLImageElement") en función de la "choice" del "owner"
 * @param {HTMLImageElement} imgElement 
 * @param {string} choice 
 * @param {string} owner 
 */
function setChoiceImg(imgElement, choice, owner) {
  imgElement.src = `${imgMap[choice]}_${owner}.png`;
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
            playerScoreTxt.textContent = "Player: " + playerPoints;

            break;

        case "Cpu":
            mainTxt.textContent = "You lost!";
            sub_text += " loses against ";

            cpuPoints++;
            cpuScoreTxt.textContent = "CPU: " + cpuPoints;

            break;
    }

    sub_text += cpuChoice;
    mainSubTxt.textContent = sub_text;
}

/**
 * Pone visible el popUp de fin del juego y actualiza el texto del ganador
 * @param {string} winner 
 */

function showGameOverPopUp(winner) {
    toogleVisibilityPopUp();
    popUpTittleTxt.textContent = winner + " wins";
}

function playAgain() {
    mainTxt.textContent  = "Choose an option";
    mainSubTxt.textContent  = "First to score 5 points wins the game";

    playerScoreTxt.textContent  = "Player: 0";
    cpuScoreTxt.textContent  = "CPU: 0";

    cpuPoints = 0;
    playerPoints = 0;

    playerChoiceImg.src = "img/interrogacion.png";
    cpuChoiceImg.src = "img/interrogacion.png";

    toogleVisibilityPopUp();
}

function toogleVisibilityPopUp() {
    overlayDiv.classList.toggle("hidden");
}
