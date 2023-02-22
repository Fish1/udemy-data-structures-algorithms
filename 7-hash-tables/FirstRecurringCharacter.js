// Google Question
// given an array = [2,5,1,2,3,5,1,2,4]
// return 2

// given an array = [2,1,1,2,3,5,1,2,4]
// return 1

// given an array = [2,3,4,5]
// return undefined


function firstRecurringElement(array) {
  const map = new Map();
  for (const c of array) {
    const currentCount = (map.get(c) ?? 0) + 1;
    if (currentCount === 2) {
      return c;
    }
    map.set(c, currentCount);
  }
  return undefined;
}

const q1 = [2,5,1,2,3,5,1,2,4];
const q2 = [2,1,1,2,3,5,1,2,4];
const q3 = [2,3,4,5];

console.log(firstRecurringElement(q1))
console.log(firstRecurringElement(q2))
console.log(firstRecurringElement(q3))

