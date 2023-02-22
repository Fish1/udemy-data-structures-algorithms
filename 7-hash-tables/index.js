
let user = {
  age: 54,
  name: 'Kylie',
  magic: true,
  scream: function() {
    console.log('ahhhhh!');
  }
}

let mymap = new Map();

mymap.set('name', 'Kylie');
mymap.set(1, 'hello');
mymap.set(2, 'goodbye');

console.log(mymap.get(1));
console.log(mymap.get('name'));