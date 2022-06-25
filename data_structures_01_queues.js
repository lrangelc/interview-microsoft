console.clear();
console.log(`Queue`);

const baseArray = [10, -1, 2, 5, 0, 6, 4, -5];


class Queue {
  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(element) {
    this.elements[this.tail] = element;
    this.tail++;
  }
  dequeue() {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }
  peek() {
    return this.elements[this.head];
  }
  get length() {
    return this.tail - this.head;
  }
  get isEmpty() {
    return this.length === 0;
  }
}

let q = new Queue();
for (let i = 1; i <= 7; i++) {
  q.enqueue(i);
}
console.log(q);
// get the current item at the front of the queue
console.log(`peek: ${q.peek()}`); // 1

// get the current length of queue
console.log(`length: ${q.length}`); // 7

// dequeue all elements
while (!q.isEmpty) {
  console.log(q.dequeue());
}

console.log(baseArray);

console.log(baseArray.shift());
console.log(baseArray.shift());
console.log(baseArray.shift());

console.log(baseArray);
