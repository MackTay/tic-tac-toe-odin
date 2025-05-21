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
        return { getMarker, markerUpdater, getWins, winsUpdater };
    }
    const player2Creator = function() {
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
        return { getMarker, markerUpdater, getWins, winsUpdater };
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
                } else if (board.boardStatus[0] && board.boardStatus[1] && board.boardStatus[2] &&
                    board.boardStatus[3] && board.boardStatus[4] && board.boardStatus[5] &&
                    board.boardStatus[6] && board.boardStatus[7] && board.boardStatus[8]) {
                    alert("The board is full. Tie game!");
                    p1.markerUpdater();
                    p2.markerUpdater();
                }
            board.markerUpdater();
        }
    }
    return { gameBoard, player1Creator, player2Creator, gameController };
})();

let game = gamePieces.gameBoard();
let p1 = gamePieces.player1Creator();
let p2 = gamePieces.player2Creator();

const tile0 = document.getElementById(tile0);
const tile1 = document.getElementById(tile1);
const tile2 = document.getElementById(tile2);
const tile3 = document.getElementById(tile3);
const tile4 = document.getElementById(tile4);
const tile5 = document.getElementById(tile5);
const tile6 = document.getElementById(tile6);
const tile7 = document.getElementById(tile7);
const tile8 = document.getElementById(tile8);

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
    scoreDisplay: function() {
        
    }
}


