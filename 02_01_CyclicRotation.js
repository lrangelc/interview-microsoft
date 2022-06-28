console.clear();

function solution(A, K) {
  for (let index = 0; index < K; index++) {
    const lastElement = A.splice(A.length - 1, 1);
    A = [lastElement[0]].concat(A);
  }
  return A;
}

const A = [3, 8, 9, 7, 6];
const K = 3;
// expected [9, 7, 6, 3, 8]

// const A = [1,2,3,4];
// const K = 4;
// console.log(A);
// const x = A.splice(0,1);
// console.log(A);
// console.log(x);

console.log(solution(A, K));
