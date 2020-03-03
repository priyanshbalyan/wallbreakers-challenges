class Queue:
    def __init__(self):
        self.queue = []
        self.front = 0
        
    def push_to_back(self, val):
        self.queue.append(val)
        
    def size(self):
        return len(self.queue[self.front:])
    
    def pop(self):
        val = self.queue[self.front]
        self.front += 1
        return val
    
    def peek(self):
        return self.queue[self.front]
        
    def is_empty(self):
        return len(self.queue[self.front:]) == 0

class MyStack:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.q = Queue()

    def push(self, x: int) -> None:
        """
        Push element x onto stack.
        """
        self.q.push_to_back(x)
        size = self.q.size()
        while size > 1:
            self.q.push_to_back(self.q.pop())
            size -= 1

    def pop(self) -> int:
        """
        Removes the element on top of the stack and returns that element.
        """
        return self.q.pop()
        

    def top(self) -> int:
        """
        Get the top element.
        """
        return self.q.peek()

    def empty(self) -> bool:
        """
        Returns whether the stack is empty.
        """
        return self.q.is_empty()


# Your MyStack object will be instantiated and called as such:
# obj = MyStack()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.top()
# param_4 = obj.empty()
