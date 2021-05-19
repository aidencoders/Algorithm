// function mergeSort(array) {
//   if (array.length < 2) {
//     return array;
//   }

//   const mid = Math.floor(array.length / 2);
//   const leftArr = array.slice(0, mid);
//   const rightArr = array.slice(mid);

//   console.log(`leftArr: ${leftArr} rightArr: ${rightArr}`);

//   return merge(mergeSort(leftArr), mergeSort(rightArr));

//   function merge(leftArr, rightArr) {
//     console.log(leftArr.length, rightArr.length);
//   }
// }

// mergeSort([5,0,9,1,8,3,2,4,7,6]);

function mergeSort (array) {
  if (array.length < 2) {
  return array;
  }
  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
  function merge (left, right) {
    debugger;
  const resultArray = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
  if (left[leftIndex] < right[rightIndex]) {
  resultArray.push(left[leftIndex]);
  leftIndex++;
  } else {
  resultArray.push(right[rightIndex]);
  rightIndex++;
  }
  }
  return resultArray.concat(left.slice(leftIndex), right.slice(rightIndex));
  }
  }
  mergeSort([5,0,9,1,8,3,2,4,7,6]);
