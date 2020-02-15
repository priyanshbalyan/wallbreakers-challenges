class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        trie = {}
        for word in words:
            ptr = trie
            for letter in word:
                if letter not in ptr:
                    ptr[letter] = {}
                ptr = ptr[letter]
            ptr['@'] = True
        
        res = []
        for i in range(len(board)):
            for j in range(len(board[i])):
                self.dfs(i, j, trie, '', board, res)
                
        return res
        
    def dfs(self, i, j, trie, word, board, res):
        if '@' in trie:
            res.append(word)
            del trie['@']
            
        if i<0 or j<0 or i>len(board)-1 or j>len(board[0])-1:
            return
        
        letter = board[i][j]
        if board[i][j] != '#' and board[i][j] in trie:
            board[i][j] = '#'
            self.dfs(i-1, j, trie[letter], word + letter, board, res)
            self.dfs(i+1, j, trie[letter], word + letter, board, res)
            self.dfs(i, j-1, trie[letter], word + letter, board, res)
            self.dfs(i, j+1, trie[letter], word + letter, board, res)
            board[i][j] = letter
        
        return
