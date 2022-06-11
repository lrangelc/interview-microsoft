console.clear();
console.log(`NumberOfDiscIntersections`);

function sortAsc(a, b) {
  return a - b;
}

function solution(A) {
  let counter = 0,
    j = 0;
  const lower = [];
  const upper = [];

  for (let i = 0; i < A.length; i++) {
    lower[i] = i - A[i];
    upper[i] = i + A[i];
  }

  lower.sort(sortAsc);
  upper.sort(sortAsc);

  for (let i = 0; i < A.length; i++) {
    while (j < A.length && upper[i] >= lower[j]) {
      counter += j - i;
      j++;
    }
    if (counter > 10000000) return -1;
  }

  return counter;
}
