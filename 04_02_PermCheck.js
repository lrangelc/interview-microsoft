console.clear();

const A =  [1, 4, 1];
// const A =  [1, 3, 2];

function solution(A) {
  if (A.length > 0) {
      const uniq = a => [...new Set(a)];
      const arrUniq = uniq(A);

      const n = A.length;
      const res = (n * (n + 1)) / 2;
      const sum = A.reduce((a, b) => a + b, 0);
      if (sum === res) {
          return arrUniq.length === n ? 1 : 0;
      }
  }
  return 0;
}

console.log(solution(A));