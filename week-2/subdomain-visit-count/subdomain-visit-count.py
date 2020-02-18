class Solution:
    def subdomainVisits(self, cpdomains: List[str]) -> List[str]:
        hashtable = {}
        for domain in cpdomains:
            count, string = domain.split(' ')
            count = int(count)
            array = string.split('.')
            for i in range(len(array)):
                string = '.'.join(array[i:])
                hashtable[string] = hashtable[string] + count if string in hashtable else count
                
        return [str(val) + ' ' + key for key, val in hashtable.items()]
