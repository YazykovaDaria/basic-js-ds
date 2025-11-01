const { NotImplementedError } = require('../lib/errors');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.stask = [];
  }
  push(element) {
    this.stask.push(element);
  }

  pop() {
    const lastEl = this.peek();
    this.stask.pop(this.stask.length - 1);
    return lastEl;
  }

  peek() {
    return this.stask[this.stask.length - 1];
  }
}

module.exports = {
  Stack,
};
