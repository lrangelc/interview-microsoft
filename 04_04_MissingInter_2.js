console.clear();
console.log(`MissingInteger`);

// const A = [1, 3, 6, 4, 1, 2];
// const A = [1, 2, 3];
// const A = [4, 5, 6, 2];
// const A = [-1,1,2,3, -3];
const A = [4, 1, 5, 6, 2];

function solution(A) {
  let max = 0;
  let array = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0) {
      if (A[i] > max) {
        max = A[i];
      }
      array[A[i]] = 0;
    }
  }
  let min = max;
  if (max < 1) {
    return 1;
  }
  for (let j = 1; j < max; j++) {
    if (typeof array[j] === 'undefined') {
      return j;
    }
  }
  if (min === max) {
    return max + 1;
  }
}

console.log(solution(A));
