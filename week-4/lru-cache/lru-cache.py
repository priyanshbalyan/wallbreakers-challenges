class ListNode:
    def __init__(self, key, val):
        self.key = key
        self.val = val
        self.next = None
        self.prev = None
        
class LRUCache:

    def __init__(self, capacity: int):
        self.capacity = capacity
        self.head = ListNode(-1, -1)
        self.tail = ListNode(-1, -1)
        self.head.next = self.tail
        self.tail.prev = self.head
        self.hashtable = {}
        
    def get(self, key: int) -> int:
        if key in self.hashtable:
            node = self.hashtable[key]
            self.remove(node)
            self.append(node)
            return node.val
        else:
            return -1

    def put(self, key: int, value: int) -> None:
        if key in self.hashtable:
            node = self.hashtable[key]
            self.remove(node)
        elif len(self.hashtable.items()) == self.capacity:
            node = self.head.next
            self.remove(node)
            del self.hashtable[node.key]
            
        newNode = ListNode(key, value)
        self.hashtable[key] = newNode
        self.append(newNode)
        
        
    def append(self, node):
        self.tail.prev.next = node
        node.next = self.tail
        node.prev = self.tail.prev
        self.tail.prev = node
    
    def remove(self, node):
        node.prev.next = node.next
        node.next.prev = node.prev


# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)
