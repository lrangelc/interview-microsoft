console.clear();
console.log(`Distinct`);

const A = [2, 1, 1, 2, 3, 1];

function solution(A) {
  A.sort();
  let distinct = 0;
  let num = null;
  if (A.length > 0) {
    A.forEach((element) => {
      if (num !== element) {
        distinct++;
      }
      num = element;
    });
  }
  return distinct;
}

console.log(solution(A));
