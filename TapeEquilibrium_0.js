console.clear();

// A[0] = 3
//   A[1] = 1
//   A[2] = 2
//   A[3] = 4
//   A[4] = 3
// We can split this tape in four places:

// P = 1, difference = |3 − 10| = 7
// P = 2, difference = |4 − 9| = 5
// P = 3, difference = |6 − 7| = 1
// P = 4, difference = |10 − 3| = 7

// console.log([1, 2, 3, 4].reduce((a, b) => a + b, 0));

const base = [];
base.push(3);
base.push(1);
base.push(2);
base.push(4);
base.push(3);

console.log(base);

function solution(A) {
  if (A.length > 0) {
    const arrDif = [];
    for (let i = 1; i < A.length; i++) {
      const element = A[i];
      console.log(element);
      const difLeft = sumLeft(A, i - 1);
      const difRight = sumRight(A, i);
      console.log(`${difLeft} ---- ${difRight} = ${Math.abs(difRight - difLeft)}`);
      arrDif.push(Math.abs(difRight - difLeft));
    }
    console.log(arrDif);
    arrDif.sort((a,b) => a - b);
    console.log(arrDif);
    return arrDif[0];
  }
  return 0;
}

function sumRight(A, index) {
  return A.reduce((a, b, ind) => (ind >= index ? a + b : 0), 0);
}

function sumLeft(A, index) {
  return A.reduce((a, b, ind) => (ind <= index ? a + b : a), 0);
}

console.log(solution(base));
console.log(solution([]));
