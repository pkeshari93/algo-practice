class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.unshift(record);
  }

  pop(record) {
    return this.data.shift(record);
  }

  peek() {
    return this.data[0];
  }
}

module.exports = Stack;
