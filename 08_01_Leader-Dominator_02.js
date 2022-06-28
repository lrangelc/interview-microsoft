console.clear();

function solution(A) {
  const arr = [];
  for (let i = 0; i < A.length; i++) {
    if (!arr[A[i]]) arr[A[i]] = 1;
    else arr[A[i]]++;
    if (arr[A[i]] > A.length / 2) return i;
  }
  return -1;
}

// const array = [3, 4, 3, 2, 3, -1, 3, 3];
// const array = [0, 0, 1, 1, 1];
const array = [0, 0, 1, 1, 1];
console.log(solution(array));
