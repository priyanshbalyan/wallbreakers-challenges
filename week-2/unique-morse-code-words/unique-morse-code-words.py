class Solution:
    def uniqueMorseRepresentations(self, words: List[str]) -> int:
        morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
        hashtable = {}
        for word in words:
            transform = ''
            for letter in word:
                transform  += morse[ord(letter) - ord('a')]
            
            hashtable[transform] = True
            
        return len(hashtable.keys())
