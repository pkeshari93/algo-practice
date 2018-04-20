// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {

  // constructor to initialize an array and assign it to every new instance of queue as a property
  constructor() {
    this.data = []
  }

  // add method, takes in the new argument to be added to the array or queue class
  add(record) {
    this.data.unshift(record)
  }

  remove(record) {
    return this.data.pop(record)
  }

}

module.exports = Queue;