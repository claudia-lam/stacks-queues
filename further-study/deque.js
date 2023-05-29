/** Node: node for a deque. */

class Node {
  val = null;
  next = null;
  prev = null;

  constructor(val) {
    this.val = val;
  }
}

/** Deque: chained-together nodes where you can
 *  add to the end or beginning and remove from the end or beginning. */

class Deque {
  first = null;
  last = null;
  size = 0;

  /** appendRight(val): add new value to end of the deque.
   * Returns undefined. */

  appendRight(val) {
    const newNode = new Node(val)
    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      newNode.prev = this.last;
      this.last = newNode;
    }
    this.size += 1;

  }

  /** popRight(): remove a node from the end of the deque.
   * Return it's value.
   * Should throw an error if the deque is empty. */

  popRight() {
    if (this.isEmpty()) {
      throw new Error("Deque is empty");
    } else if (this.size === 1) {
      const removedVal = this.last.val;
      this.first = null;
      this.last = null;
      this.size -= 1;
      return removedVal;
    } else {
      const removedVal = this.last.val;
      this.last = this.last.prev;
      this.last.next = null;
      this.size -= 1;
      return removedVal;
    }

  }

  /** appendLeft(val): add new value to beginning of the deque.
   * Returns undefined. */

  appendLeft(val) {
    const newNode = new Node(val)
    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.first.prev = newNode;
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size += 1;

  }

  /** popLeft(): remove a node from the beginning of the deque.
   * Return it's value.
   * Should throw an error if the deque is empty. */

  popLeft() {
    if (this.isEmpty()) {
      throw new Error("Deque is empty");
    } else if (this.size === 1) {
      const removedVal = this.last.val;
      this.first = null;
      this.last = null;
      this.size -= 1;
      return removedVal;
    } else {
      const removedVal = this.first.val;
      this.first = this.first.next;
      this.first.prev = null;
      this.size -= 1;
      return removedVal;
    }
  }

  /** peekRight(): return the value of the end node in the deque. */

  peekRight() {
    return this.last.val;
  }

  /** peekLeft(): return the value of the beginning node in the deque. */

  peekLeft() {
    return this.first.val;
  }

  /** isEmpty(): return true if the deque is empty, otherwise false */

  isEmpty() {
    return (this.size === 0);
  }
}

module.exports = Deque;
