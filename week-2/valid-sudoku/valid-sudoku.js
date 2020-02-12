/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const hashtable = {};
    for (let i=0; i<board.length; i++) {
        for (let j=0; j<board[i].length; j++) {
            if (board[i][j] !== '.' && !checkBoard(i, j, board, hashtable)) {
                return false
            }
        }
    }
    
    return true;
};

const checkBoard = (i, j, board, hashtable) => {
    const box_row = Math.floor(i/3);
    const box_col = Math.floor(j/3);
    
    const str_x = `${board[i][j]} in row ${i}`;
    const str_y = `${board[i][j]} in col ${j}`;
    const box = `${board[i][j]} in box ${box_row}${box_col}`;
    
    if (hashtable.hasOwnProperty(str_x) || hashtable.hasOwnProperty(str_y) || hashtable.hasOwnProperty(box))
        return false;
    hashtable[str_x] = hashtable[str_y] = hashtable[box] = true;
    
    return true;

}
