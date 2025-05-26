/* TOP tic-tac-toe JS script */

/* Factory function that can create game components (board, player objects, gamer updater function) */

const gamePieces = (function() {
    const gameBoard = function() {
        const boardStatus = [ "", "", "", "", "", "", "", "", "" ];
        let marker = "X";
        const getMarker = () => marker;
        const markerUpdater = () => {
            if (marker === "X") {
                marker = "O";
            } else {
                marker = "X";
            }
        }
        return { boardStatus, getMarker, markerUpdater }
    }
    const player1Creator = function() {
        let name = "Player 1";
        let wins = 0;
        let marker = "X";
        const getMarker = () => marker;
        const markerUpdater = () => {
            if (marker === "X") {
                marker = "O";
            } else {
                marker = "X";
            }
        }
        const getWins = () => wins;
        const winsUpdater = () => wins++;
        return { name, getMarker, markerUpdater, getWins, winsUpdater };
    }
    const player2Creator = function() {
        let name = "Player 2";
        let wins = 0;
        let marker = "O";
        const getMarker = () => marker;
        const markerUpdater = () => {
            if (marker === "X") {
                marker = "O";
            } else {
                marker = "X";
            }
        }
        const getWins = () => wins;
        const winsUpdater = () => wins++;
        return { name, getMarker, markerUpdater, getWins, winsUpdater };
    }
/* the function below will take the board object, NOT board.boardStatus, so that's why we need to use board.boardStatus below */

    const gameController = function(board, choice, p1, p2) {
        if (choice < 0 || choice > 8) {
            return "Invalid choice!";
        } else if (board.boardStatus[choice]) {
            return "Already full!"
        } else {
            board.boardStatus[choice] = board.getMarker();
            if (
                (board.boardStatus[0] === board.boardStatus[1] &&
                    board.boardStatus[0] === board.boardStatus[2] && board.boardStatus[0]) ||
                (board.boardStatus[3] === board.boardStatus[4] &&
                    board.boardStatus[3] === board.boardStatus[5] && board.boardStatus[3]) ||
                (board.boardStatus[6] === board.boardStatus[7] &&
                    board.boardStatus[6] === board.boardStatus[8] && board.boardStatus[6]) ||
                (board.boardStatus[0] === board.boardStatus[3] &&
                    board.boardStatus[0] === board.boardStatus[6] && board.boardStatus[0]) ||
                (board.boardStatus[1] === board.boardStatus[4] &&
                    board.boardStatus[1] === board.boardStatus[7] && board.boardStatus[1]) ||
                (board.boardStatus[2] === board.boardStatus[5] &&
                    board.boardStatus[2] === board.boardStatus[8] && board.boardStatus[2]) ||
                (board.boardStatus[0] === board.boardStatus[4] &&
                    board.boardStatus[0] === board.boardStatus[8] && board.boardStatus[0]) ||
                (board.boardStatus[2] === board.boardStatus[4] &&
                    board.boardStatus[2] === board.boardStatus[6] && board.boardStatus[2])) {
                    alert(`${board.getMarker()} is the winner!`);
                    if (p1.getMarker() === board.getMarker()) {
                        p1.winsUpdater();
                    } else {
                        p2.winsUpdater();
                    }
                    p1.markerUpdater();
                    p2.markerUpdater();
                    game = gamePieces.gameBoard();
                } else if (board.boardStatus[0] && board.boardStatus[1] && board.boardStatus[2] &&
                    board.boardStatus[3] && board.boardStatus[4] && board.boardStatus[5] &&
                    board.boardStatus[6] && board.boardStatus[7] && board.boardStatus[8]) {
                    alert("The board is full. Tie game!");
                    p1.markerUpdater();
                    p2.markerUpdater();
                    game = gamePieces.gameBoard();
                }
            board.markerUpdater();
        }
    }
    return { gameBoard, player1Creator, player2Creator, gameController };
})();

let game;
let p1 = gamePieces.player1Creator();
let p2 = gamePieces.player2Creator();

const tile0 = document.getElementById("tile0");
const tile1 = document.getElementById("tile1");
const tile2 = document.getElementById("tile2");
const tile3 = document.getElementById("tile3");
const tile4 = document.getElementById("tile4");
const tile5 = document.getElementById("tile5");
const tile6 = document.getElementById("tile6");
const tile7 = document.getElementById("tile7");
const tile8 = document.getElementById("tile8");

const p1Score = document.getElementById("p1-score");
const p2Score = document.getElementById("p2-score");

const display = {
// function that updates tile display to match boardStatus
    displayUpdate: function() {
        tile0.textContent = game.boardStatus[0];
        tile1.textContent = game.boardStatus[1];
        tile2.textContent = game.boardStatus[2];
        tile3.textContent = game.boardStatus[3];
        tile4.textContent = game.boardStatus[4];
        tile5.textContent = game.boardStatus[5];
        tile6.textContent = game.boardStatus[6];
        tile7.textContent = game.boardStatus[7];
        tile8.textContent = game.boardStatus[8];
    },
// function that updates scoreboard after a win or draw
    scoreUpdate: function() {
        p1Score.textContent = p1.getWins();
        p2Score.textContent = p2.getWins();
    }
}

// Event listener for gameboard

const gameDisplay = document.getElementById("tiles");

gameDisplay.addEventListener("click", (event) => {
    switch (event.target.id) {
        case "tile0":
            gamePieces.gameController(game, 0, p1, p2);
            break;

        case "tile1":
            gamePieces.gameController(game, 1, p1, p2);
            break;

        case "tile2":
            gamePieces.gameController(game, 2, p1, p2);
            break;

        case "tile3":
            gamePieces.gameController(game, 3, p1, p2);
            break;

        case "tile4":
            gamePieces.gameController(game, 4, p1, p2);
            break;

        case "tile5":
            gamePieces.gameController(game, 5, p1, p2);
            break;

        case "tile6":
            gamePieces.gameController(game, 6, p1, p2);
            break;

        case "tile7":
            gamePieces.gameController(game, 7, p1, p2);
            break;

        case "tile8":
            gamePieces.gameController(game, 8, p1, p2);
            break;
    }
    display.displayUpdate();
    display.scoreUpdate();
})

const dialog = document.querySelector("dialog");
const startBtn = document.getElementById("begin-btn");

startBtn.addEventListener('click', () => {
    dialog.showModal();
})

const submit = document.querySelector("dialog > button");
const p1Name = document.getElementById("p1-name");
const p2Name = document.getElementById("p2-name");
const p1Display = document.getElementById("p1-display");
const p2Display = document.getElementById("p2-display");

submit.addEventListener("click", (event) => {
    event.preventDefault();
    p1.name = p1Name.value;
    p2.name = p2Name.value;
    game = gamePieces.gameBoard();
    p1Display.textContent = p1.name + "'s score: ";
    p2Display.textContent = p2.name + "'s score: ";
    dialog.close();
}) // to be continued...