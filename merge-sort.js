function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  const half = (array.length / 2).toFixed(0);
  const leftArr = mergeSort(array.slice(0, half));
  const rightArr = mergeSort(array.slice(half, array.length));
  const sortedArr = [];
  while (leftArr.length > 0 && rightArr.length > 0) {
    if (leftArr[0] < rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}
