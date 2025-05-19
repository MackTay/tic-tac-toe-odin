/* TOP tic-tac-toe JS script */

/* funtion starts game and creates data for a board in array
Visual grid will be board[0-2] up top, board[3-5] in middle, and board[6-8] on bottom */

function gameBoard() {
    const boardStatus = ["", "", "", "", "", "", "", "", ""];
    let turnTracker = "X";
    const boardUpdate = function(tile) {
        if (isNaN(tile)) {
            return "Not a number!";
        } else if (boardStatus[tile]) {
            return "Already full!"
        } else {
            boardStatus[tile] = turnTracker;
            if (turnTracker === "X") {
                turnTracker = "O";
            } else {
                turnTracker = "X";
            }
        }
    }
    return { boardStatus, boardUpdate };
}

function winCheck(game) {
    if ((game.boardStatus[0] === game.boardStatus[1] && game.boardStatus[0] === game.boardStatus[2]) ||
    (game.boardStatus[3] === game.boardStatus[4] && game.boardStatus[3] === game.boardStatus[5]) ||
    (game.boardStatus[6] === game.boardStatus[7] && game.boardStatus[6] === game.boardStatus[8]) ||
    (game.boardStatus[0] === game.boardStatus[3] && game.boardStatus[0] === game.boardStatus[6]) ||
    (game.boardStatus[1] === game.boardStatus[4] && game.boardStatus[1] === game.boardStatus[7]) ||
    (game.boardStatus[2] === game.boardStatus[5] && game.boardStatus[2] === game.boardStatus[8]) ||
    (game.boardStatus[0] === game.boardStatus[4] && game.boardStatus[0] === game.boardStatus[8]) ||
    (game.boardStatus[2] === game.boardStatus[4] && game.boardStatus[2] === game.boardStatus[6])) {
        alert(`${game.turnTracker} is the winner!`);
    }
} /* this doesn't account for undefined values, so it will always return true */