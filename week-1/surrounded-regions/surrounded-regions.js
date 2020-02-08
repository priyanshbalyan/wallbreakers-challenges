/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

var solve = function(board) {
    if (board.length == 0) return board;
    let update = function (i, j, board, visited, char) {
        if (i<0 || j<0 || i>board.length-1 || j>board[0].length-1 || board[i][j] === 'X' || visited[i][j])
            return;
        board[i][j] = char;
        visited[i][j] = true;
        update(i+1, j, board, visited, char);
        update(i-1, j, board, visited, char);
        update(i, j+1, board, visited, char);
        update(i, j-1, board, visited, char);
    };
    
    for (let i=0; i<board.length; i++) {
        for (let j=0; j<board[i].length; j++) {
            if (i===0 || i===board.length-1 || j===0 || j===board[i].length-1) {
                let visited = new Array(board.length).fill(false).map(x => Array(board[i].length).fill(false));
                if (board[i][j] === 'O') update(i, j, board, visited, '1')
            }
        }
    }
          
    for (let i=1; i<board.length-1; i++) {
        for (let j=1; j<board[i].length-1; j++) {
            if (board[i][j] === 'O') board[i][j] = 'X';
        }
    }
        
    
    for (let i=0; i<board.length; i++) {
        for (let j=0; j<board[i].length; j++) {
            if (board[i][j] === '1') board[i][j] = 'O';
        }
    }
        
    return board;
};
