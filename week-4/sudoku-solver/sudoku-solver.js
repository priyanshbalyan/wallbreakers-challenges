/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    solveBoard(0, 0, board);
};

const solveBoard = (row, col, board) => {
    if (row === board.length) return true;
    if (col === board.length) return solveBoard(row+1, 0, board);
    if (board[row][col] != '.') return solveBoard(row, col+1, board);
    
    for (let i=1; i<10; i++) {
        const value = String(i);
        if (validate(row, col, value, board)) {
            board[row][col] = value;
            if (solveBoard(row, col+1, board)) return true;
            board[row][col] = '.';
        }
    }
        
    return false;
}

const validate = (row, col, number, board) => {
    const subRow = Math.floor(row/3)*3;
    const subCol = Math.floor(col/3)*3;
    
    for (let i=0; i<board.length; i++) {
        if (board[row][i] === number || board[i][col] === number) return false;
    }
    
    for (let i=subRow; i<subRow+3; i++) {
        for (let j=subCol; j<subCol+3; j++) {
            if (board[i][j] === number) return false;
        }
    }
    return true;
}
