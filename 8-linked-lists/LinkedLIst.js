
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const node = new Node(value);

    if (this.head === null && this.tail === null) {
      this.head = node;
      this.tail = node;
      return;
    }

    this.tail.link(node);
    this.tail = node;
  }

  insert (value, index) {
    const newNode = new Node(value);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current_index = 0;
    let current_node = this.head;
    while (current_index < index - 1) {
      current_node = current_node.next;
      current_index++;
    }

    const next = current_node.next;
    current_node.next = newNode;
    current_node.next.next = next;
  }

  getHead() {
    return this.head;
  }

  peek() {
    return this.tail.value;
  }

  pop() {
    const value = this.tail.value;
    let current = this.head;
    while (current.next !== this.tail) {
      current = current.next;
    }
    current.next = null;
    delete this.tail;
    this.tail = current;
    return value;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  link(node) {
    this.next = node;
  }
}

const myLinkedList = new LinkedList();

myLinkedList.append(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.append(5);

console.log(myLinkedList);

let current = myLinkedList.getHead();
while (current) {
  console.log(current.value);
  current = current.next;
}

myLinkedList.insert(10, 0);
console.log("----");

current = myLinkedList.getHead();
while (current) {
  console.log(current.value);
  current = current.next;
}

myLinkedList.insert(11, 3);
console.log("----");

current = myLinkedList.getHead();
while (current) {
  console.log(current.value);
  current = current.next;
}
