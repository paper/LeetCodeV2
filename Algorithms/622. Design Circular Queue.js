/**
 * Created by paper on 2019/11/05.
 * https://leetcode-cn.com/problems/design-circular-queue/submissions/
 */

/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.list = [];
    this.MAX_LEN = k;
    this.list.length = k;
    
    this.head = -1;
    this.tail = -1;
    
    // 使用计数器
    this.num = 0;
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) {
        return false;
    }
    
    // 1 计数器加一
    this.num += 1;
    
    // 2 如果当前是第一个元素，那么 head, tail 都是 0
    if (this.head === -1 && this.tail === -1) {
        this.head = 0;
        this.tail = 0;
    } else {
        // 3.1 如果 tail 已经到末尾了，就回到最前面
        if (this.tail === this.MAX_LEN - 1) {
            this.tail = 0;
        } else {
            // 3.2 反之，前进 1 格
            this.tail += 1;
        }
    }
    
    // 4 确定好了 tail 指针后，就可以插入元素了
    this.list[this.tail] = value;
    
    return true;
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (this.isEmpty()) {
        return false;
    }
    
    // 1 计数器减一
    this.num -= 1;
    
    // 2 如果清空了，指针重置
    if (this.num === 0) {
        this.head = -1;
        this.tail = -1;
    } else {
        // 3 先删除当前得元素
        this.list[this.head] = undefined;
        
        // 4 再移动 head 指针
        // 4.1 如果 head 指针已经在末尾了，就移动到首部
        if (this.head === this.MAX_LEN - 1) {
            this.head = 0
        } else {
            // 4.2 否则就向前走一格
            this.head += 1;
        }
    }
    
    return true;
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if (this.isEmpty()) {
        return -1;
    }
    
    return this.list[this.head];
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if (this.isEmpty()) {
        return -1;
    }
    
    return this.list[this.tail];
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.num === 0;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.num === this.MAX_LEN;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */