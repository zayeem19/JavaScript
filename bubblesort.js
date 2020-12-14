function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++)
      if (array[j] < array[j - 1]) {
        let temp = array[j - 1];
        array[j - 1] = array[j];
        array[j] = temp;
      }
  }
  return array;
}
let array = [5, 2, 4, 6, 1, 3];
bubbleSort(array);
console.log(array);
