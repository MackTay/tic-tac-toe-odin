/* TOP tic-tac-toe JS script */

function startGame() {
    const board = ["", "", "", "", "", "", "", "", ""];
    let turnTracker = "X";
    return function boardUpdate(tile) {
        if (isNaN(tile)) {
            return "Not a number!";
        } else if (board[tile]) {
            return "Already full!"
        } else {
            board[tile] = turnTracker;
            if (turnTracker === "X") {
                turnTracker = "O";
            } else {
                turnTracker = "X";
            }
        }
        return board;
    }
}