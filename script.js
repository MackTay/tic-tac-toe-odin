/* TOP tic-tac-toe JS script */

/* funtion starts game and creates data for a board in array
Visual grid will be board[0-2] up top, board[3-5] in middle, and board[6-8] on bottom */

function gameBoard() {
    const boardStatus = [ "", "", "", "", "", "", "", "", "" ];
    let turnTracker = "X";
    const boardUpdate = function(tile) {
        if (isNaN(tile)) {
            return "Not a number!";
        } else if (boardStatus[tile]) {
            return "Already full!"
        } else {
            boardStatus[tile] = turnTracker;
            if (
                (boardStatus[0] === boardStatus[1] &&
                boardStatus[0] === boardStatus[2] && boardStatus[0]) ||
                (boardStatus[3] === boardStatus[4] &&
                boardStatus[3] === boardStatus[5] && boardStatus[3]) ||
                (boardStatus[6] === boardStatus[7] &&
                boardStatus[6] === boardStatus[8] && boardStatus[6]) ||
                (boardStatus[0] === boardStatus[3] &&
                boardStatus[0] === boardStatus[6] && boardStatus[0]) ||
                (boardStatus[1] === boardStatus[4] &&
                boardStatus[1] === boardStatus[7] && boardStatus[1]) ||
                (boardStatus[2] === boardStatus[5] &&
                boardStatus[2] === boardStatus[8] && boardStatus[2]) ||
                (boardStatus[0] === boardStatus[4] &&
                boardStatus[0] === boardStatus[8] && boardStatus[0]) ||
                (boardStatus[2] === boardStatus[4] &&
                boardStatus[2] === boardStatus[6] && boardStatus[2])) {
                    alert(`${turnTracker} is the winner!`);
                } else if (turnTracker === "X") {
                turnTracker = "O";
            } else {
                turnTracker = "X";
            }
        }
    }
    return { boardStatus, boardUpdate };
}
