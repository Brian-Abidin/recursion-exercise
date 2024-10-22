function fibs(num) {
  const fibArr = [];
  for (let i = 0; i < num; i += 1) {
    if (i < 2) {
      fibArr.push(i);
    } else {
      fibArr.push(fibArr[i - 2] + fibArr[i - 1]);
    }
  }
  return fibArr;
}

function fibsRec(num) {
  console.log("recursive");
  if (num === 2) {
    return [0, 1];
  }
  const fibArr = fibsRec(num - 1);
  console.log(fibArr);
  fibArr.push(fibArr[num - 3] + fibArr[num - 2]);
  return fibArr;
}
