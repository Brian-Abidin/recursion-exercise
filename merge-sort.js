function mergeSort(array) {
  // takes in an array and
  // returns a sorted array
  // using recursive merge sort
  // methodology.
  if (array.length === 1) {
    return array;
  }
  const half = (array.length / 2).toFixed(0);
  const leftArr = mergeSort(array.slice(0, half));
  const rightArr = mergeSort(array.slice(half, array.length))
  const sortedArr = []
  while(leftArr.length > 0 && rightArr.length > 0){
    if(leftArr[0] < rightArr[0]){
      sortedArr.push(leftArr.shift())
    } else {
      sortedArr.push(rightArr.shift())
    }
  }
  console.log(sortedArr)
  return [...sortedArr,...leftArr, ...rightArr]
}
const arr = [1, 2, 3, 4, 5, 6, 7];
const half = (arr.length / 2).toFixed(0);
const arrLeft = arr.slice(0, half);
const arrRight = arr.slice(half, arr.length);
console.log(arrLeft, arrRight);

console.log(mergeSort([9, 2, 15, 7, 4, 21, 6, 4]));

const arr1 = [1];
const arr2 = [5];
