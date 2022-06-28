console.clear();

function solution(A) {
  let ant = A[0];
  let max = 0;
  for (let index = 1; index < A.length; index++) {
    const element = array[index];

    console.log(`ant: ${ant} element: ${element} = ${ant + element}`);
    if (element + ant > max) {
      max = element + ant;
    }
    ant = element;
  }
  return max;
}

// const array = [3, 4, 3, 2, 3, -1, 3, 3];
// const array = [0, 0, 1, 1, 1];
const array = [3, 2, -6, 4, 0];
console.log(solution(array));
