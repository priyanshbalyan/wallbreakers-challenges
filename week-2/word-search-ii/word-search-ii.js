/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    const trie = {};
    for (let word of words) {
        let ptr = trie;
        for (let letter of word) {
            if (!(letter in ptr)) ptr[letter] = {};
            ptr = ptr[letter];
        }
        ptr['@'] = true;
    }
    
    const res = [];
    for (i in board) {
        for (j in board[i]) {
            dfs(parseInt(i), parseInt(j), board, '', trie, res);
        }
    }
    return res;
};

const dfs = (i, j, board, word, trie, res) => {
    if ('@' in trie) {
        res.push(word);
        delete trie['@'];
    }
    
    if (i<0 || j<0 || i>board.length-1 || j>board[0].length-1) return;
    
    const letter = board[i][j];
    if (board[i][j] !== '#' && (letter in trie)) {
        board[i][j] = '#';
        dfs(i+1, j, board, word + letter, trie[letter], res);
        dfs(i-1, j, board, word + letter, trie[letter], res);
        dfs(i, j+1, board, word + letter, trie[letter], res);
        dfs(i, j-1, board, word + letter, trie[letter], res);
        board[i][j] = letter;
    }
    
    return;
}
