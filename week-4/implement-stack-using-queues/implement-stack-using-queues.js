/**
 * Initialize your data structure here.
 */
const Queue = function () {
    this.front = 0;
    this.queue = [];
}

Queue.prototype.push_to_back = function(val) {
    this.queue.push(val);
}

Queue.prototype.pop = function() {
    const val = this.queue[this.front];
    ++this.front;
    return val;
}

Queue.prototype.peek = function() {
    return this.queue[this.front];
}

Queue.prototype.is_empty = function() {
    return this.queue.slice(this.front).length === 0;
}

Queue.prototype.size = function() {
    return this.queue.slice(this.front).length;
}

var MyStack = function() {
    this.q = new Queue();
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q.push_to_back(x);
    let size = this.q.size();
    while (size > 1) {
        this.q.push_to_back(this.q.pop());
        --size;
    }
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.q.pop();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.q.peek();
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q.is_empty();
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
