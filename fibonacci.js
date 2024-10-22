function fibs(num) {
  // returns array that contains num amount of numbers from the
  // fibonacci sequence.
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

console.log(fibs(8));

function fibsRec(num) {
  // does the same thing as fibs, however, recursively.
  console.log("recursive");
  if (num === 2) {
    return [0, 1];
  }
  const fibArr = fibsRec(num - 1);
  console.log(fibArr);
  fibArr.push(fibArr[num - 3] + fibArr[num - 2]);
  return fibArr;
}
const newarr = fibsRec(8);
console.log(newarr);

// fibsRec(8)
// fibArr = fibsRec(7)
// fibsRec(7)
// fibsRec(6)
// fibsRec(5)
// fibsRec(4)

// fibsRec(3)

/* fibArr = [0, 1] because when num = 3, fibArr = fibsRec(2) which = [0, 1]
 *  then fibArr.push((fibArr[1] + fibArr[0]))
 * fibArr[1] + fibArr[0] = 1 + 0 because
 * fibArr = [0, 1] so, fibArr.push(1)
 * returns fibArr which is now [0, 1, 1]
 * so fibsRec(3) = [0, 1, 1]
 */
// fibsRec(2) returns because num === 2 [0, 1]

// create the fibonacci sequence then push it into the array
// formula for the fibonacci sequence n = (n-1) + (n-2) except for
// the first two digits which will always be 0 and 1.
