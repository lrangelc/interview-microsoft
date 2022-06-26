console.clear();

function lis(arrayBase) {
  // Create an array for longest increasing substrings lengths and
  // fill it with 1s. This means that each element of the arr
  // is itself a minimum increasing subsequence.
  const lengthsArr = Array(arrayBase.length).fill(1);

  let prevElIdx = 0;
  let currElIdx = 1;

  while (currElIdx < arrayBase.length) {
    if (arrayBase[prevElIdx] < arrayBase[currElIdx]) {
      // If current element is bigger then the previous one. then
      // it is a part of increasing subsequence where length is
      // by 1 bigger then the length of increasing subsequence
      // for the previous element.
      const newLen = lengthsArr[prevElIdx] + 1;
      if (newLen > lengthsArr[currElIdx]) {
        // Increase only if previous element would give us a
        // bigger subsequence length then we already have for
        // current element.
        lengthsArr[currElIdx] = newLen;
      }
    }

    // Move previous element index right.
    prevElIdx += 1;

    // If previous element index equals to current element index then
    // shift current element right and reset previous element index to zero.
    if (prevElIdx === currElIdx) {
      currElIdx += 1;
      prevElIdx = 0;
    }
  }

  // Find the largest element in lengthsArr, as it
  // will be the biggest length of increasing subsequence.
  let longestIncreasingLength = 0;

  for (let i = 0; i < lengthsArr.length; i += 1) {
    if (lengthsArr[i] > longestIncreasingLength) {
      longestIncreasingLength = lengthsArr[i];
    }
  }

  return longestIncreasingLength;
}

const array1 = [1, 2, 1, 5, 20];
const array2 = [84, 80, 27];
const array = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15];
const array4 = [1, 2, 1, 5];
const array5 = [0, 2, 6, 9, 13, 15];
const array3 = [51, 8, 10, 5, 2, 14, 17, 19, 7, 9, 29];

console.log(lis(array));

// https://algodaily.com/challenge_slides/longest-increasing-subsequence
