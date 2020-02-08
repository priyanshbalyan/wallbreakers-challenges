class Solution:
    def detectCapitalUse(self, word: str) -> bool:
        if word.upper() == word: return True
        if word[0].lower()+word[1:] == word.lower(): return True
        if word.lower() == word: return True
        return False
