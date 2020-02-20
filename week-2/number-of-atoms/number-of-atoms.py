class Solution:
    def countOfAtoms(self, formula: str) -> str:
        hashtable = collections.defaultdict(int)
        stack = []
        elem = ''
        count = 0
        power = 0
        coefficient = 1
        for i in formula[::-1]:
            if i.islower():
                elem += i
            
            elif i.isupper():
                elem += i
                hashtable[elem[::-1]] += (count or 1) * coefficient
                count = power = 0
                elem = ''
            
            elif i.isdigit():
                count += int(i) * (10**power)
                power += 1
            
            elif i == ')':
                stack.append(count)
                coefficient *= count
                count = power = 0
                
            elif i == '(':
                coefficient //= stack.pop()
                count = power = 0
                
        x = list(hashtable.items())
        x.sort(key=lambda a: a[0])
        return ''.join(list(map(lambda a: a[0] + str(a[1]) if a[1] != 1 else a[0], x)))
