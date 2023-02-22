
class MyHashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const hash = this._hash(key);

    // create the bucket if it doesn't exist
    if (this.data[hash] === undefined) {
      this.data[hash] = [];
    }

    // if the key exists, then overwrite it
    for (const element of this.data[hash]) {
      if (element[0] === key) {
        element[1] = value;
        return;
      }
    }

    // if the key doesn't exist, then create it
    this.data[hash].push([key, value]);
  }

  get(key) {
    const hash = this._hash(key);
    const data = this.data[hash];

    // if the bucket doesn't exist return null
    if (data === undefined) {
      return null;
    }

    // iterate over the bucket and find the value
    for (const element of data) {
      if (element[0] === key) {
        return element[1];
      }
    }

    // if not found, then return null
    return null;
  }

  keys() {
    const result = [];

    // loop over the buckets
    for (const bucket of this.data) {
      if (bucket === undefined) {
        continue;
      }

      // loop over the elements in the bucket
      for (const element of bucket) {
        result.push(element[0]);
      }
    }
    return result;
  }
}

const myHashTable = new MyHashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 9);
myHashTable.set('apples', 29);
myHashTable.set('bears', '123');

console.log(myHashTable);

console.log(myHashTable.get('grapes'));
console.log(myHashTable.get('apples'));

console.log(myHashTable.keys());
