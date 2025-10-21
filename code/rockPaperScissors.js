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
 * Compara las elecciones del playero y la máquina y determina el ganador
 * @param {string} playerChoice - Elección del playero
 * @param {string} cpuChoice - Elección de la máquina
 * @returns {string} Resultado de la ronda
 */
function compareChoices(playerChoice, cpuChoice) {
    if (playerChoice === cpuChoice) return "Draw";

    const rules = {
        Rock: "Scissors",
        Paper: "Rock",
        Scissors: "Paper"
    };

    if (rules[playerChoice] === cpuChoice) {
        return "Player";
    } else {
        return "Cpu";
    }
}

//Exportamos las funciones para que se puedan usar fuera de la clase
export {getComputerChoice, compareChoices};