/** Node: node for a queue. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  first = null;
  last = null;
  size = 0;

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    const newNode = new Node(val);

    if (this.size === 0){
      this.first = newNode;
    } else {
    this.last.next = newNode;
    }

    this.last = newNode;
    this.size += 1;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    //if size === 0
      //throw an error
    if (this.isEmpty()) {
      throw new Error("list is empty");
    }

    //store removed val in a variable
    const removedVal = this.first.val;
    //update the first to be the next value
    this.first = this.first.next;
    this.size -= 1;

    //return the removed val
    return removedVal;

  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val;

  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return (this.size === 0);
  }
}

module.exports = Queue;
