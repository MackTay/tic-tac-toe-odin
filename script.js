/* TOP tic-tac-toe JS script */

/* funtion starts game and creates data for a board in array
Visual grid will be board[0-2] up top, board[3-5] in middle, and board[6-8] on bottom */

function startGame() {
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