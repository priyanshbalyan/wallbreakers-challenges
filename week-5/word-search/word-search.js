/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    for (let i=0; i<board.length; i++) {
        for (let j=0; j<board[i].length; j++) {
            if (board[i][j] === word[0] && dfs(i, j, 0, word, board)) return true;
        }
    }
    
    return false;
};

const dfs = (i, j, ptr, word, board) => {
    if (ptr === word.length) return true;
    if (i<0 || j<0 || i>=board.length || j>=board[i].length || board[i][j] !== word[ptr]) return false;
    
    const temp = board[i][j];
    board[i][j] = ' ';
    const found = dfs(i+1, j, ptr+1, word, board) || dfs(i-1, j, ptr+1, word, board) || dfs(i, j+1, ptr+1, word, board) || dfs(i, j-1, ptr+1, word, board);
    
    board[i][j] = temp;
    return found;
};
