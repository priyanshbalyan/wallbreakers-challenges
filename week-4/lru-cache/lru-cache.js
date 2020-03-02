/**
 * @param {number} capacity
 */
const ListNode = function (key, val) {
    this.key = key;
    this.val = val;
};

var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.head = new ListNode(-1,-1);
    this.tail = new ListNode(-1,-1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.hashtable = {};
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (key in this.hashtable) {
        const node = this.hashtable[key];
        this.remove(node);
        this.append(node);
        return node.val;
    } else return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (key in this.hashtable) {
        const node = this.hashtable[key];
        this.remove(node);
    } else if (Object.keys(this.hashtable).length === this.capacity) {
        const node = this.head.next;
        delete this.hashtable[node.key];
        this.remove(node);
    }
    
    const node = new ListNode(key, value);
    this.hashtable[key] = node;
    this.append(node);
};

LRUCache.prototype.append = function(node) {
    this.tail.prev.next = node;
    node.next = this.tail;
    node.prev = this.tail.prev;
    this.tail.prev = node;
};

LRUCache.prototype.remove = function(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
};
/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
