let humanPoints = 0;
let machinePoints = 0;

startGame(5);

function startGame(rounds) {
    
    while (humanPoints < rounds && machinePoints < rounds)
    {
        playRound();
    }

    if (humanPoints == rounds){
        console.log("Human wins !!!!");
    }
    else {
        console.log("Machine wins !!!!");
    }
}


function playRound() {
    let humansChoice = getHumanChoice();
    let computersChoice = getComputerChoice();

    let roundResult = compareChoices(humansChoice, computersChoice);

    console.log(`Humans choice ----> ${humansChoice}`);
    console.log(`Machine choice ----> ${computersChoice}`);
    console.log("---------------------------------------------------------------");
    console.log(`Result ----> ${roundResult}`);
}


/**
 * Obtiene la decisión de la máquina entre pieda papel o tijeras
 * @returns {string} "Rock | Paper | Scissors"
 */
function getComputerChoice() {
    let randomNumber = getRandomInt(3);

    switch(randomNumber){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

/**
 * Devuelve un número entero aleatorio desde 0 hasta (max - 1).
 * Utiliza Math.random() para generar el número y Math.floor() para redondear hacia abajo.
 * @param {number} max - El límite superior (no incluido) para el número aleatorio.
 * @returns {number} Un número entero aleatorio entre 0 y max - 1.
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

/**
 * Devuelve la decisión del usuario mediante un prompt
 * @returns {string} "Rock | Paper | Scissors"
 */
function getHumanChoice() {
    return window.prompt("Rock | Paper | Scissors");
}

/**
 * Compara las elecciones del humano y la máquina y determina el ganador
 * @param {string} humansChoice - Elección del humano
 * @param {string} machinesChoice - Elección de la máquina
 * @returns {string} Resultado de la ronda
 */
function compareChoices(humansChoice, machinesChoice) {
    if (humansChoice === machinesChoice) return "Draw";

    const rules = {
        Rock: "Scissors",
        Paper: "Rock",
        Scissors: "Paper"
    };

    if (rules[humansChoice] === machinesChoice) {
        humanPoints ++;
        return "Human wins the round";
    } else {
        machinePoints ++;
        return "Machine wins the round";
    }
}