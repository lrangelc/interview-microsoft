console.clear();
console.log(`Fish`);

const A = [4, 3, 2, 1, 5];
const B = [0, 1, 0, 0, 0];

function solution(A, B) {
  const downStream = [];
  const upStream = [];
  let direction;

  for (var i = 0; i < A.length; i++) {
    direction = B[i];

    if (direction === 0) {
      while (downStream.length > 0) {
        const d = downStream.pop();

        if (d > A[i]) {
          downStream.push(d);
          break;
        }
      }

      if (downStream.length === 0) {
        upStream.push(A[i]);
      }
    } else {
      downStream.push(A[i]);
    }
  }

  return downStream.length + upStream.length;
}

console.log(solution(A, B));
