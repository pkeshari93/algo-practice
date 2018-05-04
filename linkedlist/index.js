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

  size() {
    let length = 0;
    let curNode = this.head;

    while (curNode) {
      length++;
      curNode = curNode.next;
    }
    return length;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let curNode = this.head;

    if (!this.head) {
      return null;
    }

    while (curNode) {
      if (!curNode.next) {
        return curNode;
      }
      curNode = curNode.next;
    }
    // return curNode;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let prevnode = this.head;
    let curnode = this.head;

    while (curnode.next) {
      prevnode = curnode;
      curnode = curnode.next;
    }
    prevnode.next = null;
  }

  insertLast(data) {
    // const node = new Node(data);

    // let curnode = this.head;

    // let curnode = this.getLast();

    // while (curnode.next) {
    //   curnode = curnode.next;
    // }
    // curnode.next = node;

    const last = this.getLast();

    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }
}

module.exports = { Node, LinkedList };
