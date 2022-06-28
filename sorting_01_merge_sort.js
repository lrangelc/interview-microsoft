console.clear();
console.log(`Merge Sort`);
// Merge Sort is a recursive algorithm and time complexity can be expressed as following recurrence relation. 
// The time complexity of MergeSort is O(n*Log n) in all the 3 cases (worst, average and best) as the mergesort always 
// divides the array into two halves and takes linear time to merge two halves.

const baseArray = [10, -1, 2, 5, 0, 6, 4, -5];

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(baseArray);

const newArray = mergeSort(baseArray);

console.log(newArray);