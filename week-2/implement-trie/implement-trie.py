class Trie:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.trie = {}

    def insert(self, word: str) -> None:
        """
        Inserts a word into the trie.
        """
        ptr = self.trie
        for letter in word:
            if letter not in ptr:
                ptr[letter] = {}
            ptr = ptr[letter]
        
        ptr['@'] = True # signifies end of word
        
    def search(self, word: str) -> bool:
        """
        Returns if the word is in the trie.
        """
        ptr = self.trie
        for letter in word:
            if letter not in ptr:
                return False
            ptr = ptr[letter]
        
        if '@' in ptr:
            return True
        return False
        

    def startsWith(self, prefix: str) -> bool:
        """
        Returns if there is any word in the trie that starts with the given prefix.
        """
        ptr = self.trie
        for letter in prefix:
            if letter not in ptr:
                return False
            ptr = ptr[letter]
        return True
        


# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)
