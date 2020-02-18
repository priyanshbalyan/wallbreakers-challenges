class Solution:
    def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
        for i in "!?',;.":
            paragraph = paragraph.replace(i, ' ')
        paragraph = paragraph.lower().split()
        banned_table = set(banned)
        word_counts = {}
        
        max_count = 0
        max_word = None
        for word in paragraph:
            if word not in banned_table:
                word_counts[word] = word_counts[word] + 1 if word in word_counts else 1
                if word_counts[word] > max_count:
                    max_count = word_counts[word]
                    max_word = word
            
        return max_word
