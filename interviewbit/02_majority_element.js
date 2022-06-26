console.clear();

function candy(A) {
  const totalSum = {};
  A.forEach((element) => {
    if (totalSum[element]) {
      totalSum[element]++;
    } else {
      totalSum[element] = 1;
    }
  });

  const totalSumArray = Object.entries(totalSum);
  totalSumArray.sort(function (a, b) {
    return b[1] - a[1];
  });

  const max = Math.max.apply(null, Object.values(totalSum));

  return totalSumArray[0][0];
}

const array = [2, 1, 2, 3, 5, 6, 1, 2, 2, 5, 2, 3, 2, 1];

console.log(candy(array));
