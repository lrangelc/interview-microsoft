console.clear();
console.log(`MissingInteger`);

// const A = [1, 3, 6, 4, 1, 2];
// const A = [1, 2, 3];
// const A = [4, 5, 6, 2];
// const A = [-1,1,2,3, -3];
const A = [4, 1, 5, 6, 2];

function solution(A) {
  A.sort();
  let min = 1;
  if (A.length > 0) {
    const found = A.find((element) => element === 1);
    if (!found) {
      return 1;
    }
    let cont = true;
    let index = 0;
    while (cont && index < A.length) {
      const element = A[index];
      if (min === element) {
        min = element + 1;
        if (A[index + 1] > min) {
          cont = false;
        }
      }
      if (index + 1 === A.length && min === A[index]) {
        min++;
        cont = false;
      }

      index++;
    }
  }
  return min === 0 ? 1 : min;
}

console.log(solution(A));
