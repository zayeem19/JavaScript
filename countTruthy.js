function countTruthy(array) {
  let count = 0;
  for (let value of array) if (value) count++;
  return count;
}

const array = [1, 2, 3, 4];
console.log(countTruthy(array));
