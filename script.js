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


/* funtion starts game and creates data for a board in array
Visual grid will be board[0-2] up top, board[3-5] in middle, and board[6-8] on bottom */

// function gameBoard() {
//     const boardStatus = [ "", "", "", "", "", "", "", "", "" ];
//     let turnTracker = "X";
//     const boardUpdate = function(tile) {
//         if (isNaN(tile)) {
//             return "Not a number!";
//         } else if (boardStatus[tile]) {
//             return "Already full!"
//         } else {
//             boardStatus[tile] = turnTracker;
//             if (
//                 (boardStatus[0] === boardStatus[1] &&
//                 boardStatus[0] === boardStatus[2] && boardStatus[0]) ||
//                 (boardStatus[3] === boardStatus[4] &&
//                 boardStatus[3] === boardStatus[5] && boardStatus[3]) ||
//                 (boardStatus[6] === boardStatus[7] &&
//                 boardStatus[6] === boardStatus[8] && boardStatus[6]) ||
//                 (boardStatus[0] === boardStatus[3] &&
//                 boardStatus[0] === boardStatus[6] && boardStatus[0]) ||
//                 (boardStatus[1] === boardStatus[4] &&
//                 boardStatus[1] === boardStatus[7] && boardStatus[1]) ||
//                 (boardStatus[2] === boardStatus[5] &&
//                 boardStatus[2] === boardStatus[8] && boardStatus[2]) ||
//                 (boardStatus[0] === boardStatus[4] &&
//                 boardStatus[0] === boardStatus[8] && boardStatus[0]) ||
//                 (boardStatus[2] === boardStatus[4] &&
//                 boardStatus[2] === boardStatus[6] && boardStatus[2])) {
//                     alert(`${turnTracker} is the winner!`);
//                 } else if (boardStatus[0] && boardStatus[1] && boardStatus[2] &&
//                     boardStatus[3] && boardStatus[4] && boardStatus[5] &&
//                     boardStatus[6] && boardStatus[7] && boardStatus[8]) {
//                     alert("The board is full. Tie game!");
//                 } else if (turnTracker === "X") {
//                     turnTracker = "O";
//                 } else {
//                     turnTracker = "X";
//                 }
//         }
//     }
//     return { boardStatus, boardUpdate };
// }

/* Add a FF that creates 2 player objects. Each object should keep track of number of wins and whether it's their turn to be X or not */

// function createPlayers() {
//     const player1 = { wins: 0, startingTurn: true };
//     const player2 = { wins: 0, startingTurn: false };
//     return { player1, player2 };
// }

/* Add a FF that creates a tra */




