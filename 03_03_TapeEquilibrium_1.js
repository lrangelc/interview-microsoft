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
    let acu1 = A[0];
    let acu2 = A.reduce((a, b) => a + b, 0);
    for (let i = 1; i < A.length; i++) {
      acu2 -= A[i-1];
      const difLeft = acu1;
      const difRight = acu2;
      console.log(`${difLeft} ---- ${difRight} = ${Math.abs(difRight - difLeft)}`);
      arrDif.push(Math.abs(difRight - difLeft));
      acu1 += A[i];
    }
    console.log(arrDif);
    arrDif.sort((a,b) => a - b);
    console.log(arrDif);
    return arrDif[0];
  }
  return 0;
}

console.log(solution(base));
console.log(solution([]));
