class MyArray {
  constructor() {
    this.length = 0;
    this.data = {}
  }

  // O(1) because access time is instant
  get(index) {
    return this.data[index];
  }

  // O(1) because we only perform one operation
  push(data) {
    this.data[this.length] = data;
    this.length += 1;
  }

  // O(1) because we only delete the last element
  pop() {
    if (this.length === 0) return;
    delete this.data[this.length - 1];
    this.length -= 1;
  }

  // worst case O(n) because it will need to loop through all elements
  delete(index) {
    delete this.data[this.index];
    for (let i = index; i < this.length - 1; i += 1) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1]
    this.length -= 1;
  }
}

const myarray = new MyArray();

myarray.push(5);
myarray.push(9);
myarray.push(10);
myarray.push("hello")
myarray.push(23);
myarray.push(23);

console.log(myarray);

myarray.pop();

console.log(myarray);

myarray.delete(1);

console.log(myarray);

