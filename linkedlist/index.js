// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
    // next: null
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const n = new Node(data, this.head);
    this.head = n;
  }
}

module.exports = { Node, LinkedList };
