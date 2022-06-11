console.clear();
console.log(`PassingCars`);

// const A = [0, 1, 0, 1, 1];
const A = [0, 0, 1, 1, 0, 1, 1];

function solution(A) {
  let pairs = 0;
  let acu1 = 0;
  const total = A.reduce((a, b) => a + b, 0);
  if (A.length > 0) {
    A.forEach((element, index) => {
      if (element === 0) {
        pairs += total - acu1;
      } else {
        acu1++;
      }
    });
  }
  return pairs > 1000000000 ? -1 : pairs;
}

console.log(solution(A));
