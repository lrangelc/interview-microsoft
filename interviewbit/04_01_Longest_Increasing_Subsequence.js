console.clear();

function lis(A) {
  const unique = [...new Set(A)];
  // const unique = A;
  unique.sort(function (a, b) {
    return a - b;
  });
  console.log(unique);

  let maxIncreasing = 0;
  let beforeValue = 0;
  let count =0

  unique.forEach((element) => {
    if (element - beforeValue > maxIncreasing) {
      maxIncreasing = element - beforeValue;
      count++;
    }
    beforeValue = element;
  });
  console.log(count);
  return maxIncreasing;
}

const array1 = [1, 2, 1, 5, 20];
const array2 = [84, 80, 27];
const array = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15];
const array4 = [1, 2, 1, 5];
const array5 =  [0, 2, 6, 9, 13, 15];
const array3 =  [51,8,10,5,2,14,17,19,7,9,29];

console.log(lis(array));


// https://algodaily.com/challenge_slides/longest-increasing-subsequence