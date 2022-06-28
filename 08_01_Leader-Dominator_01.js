console.clear();

function solution(A) {
  const group = {};

  A.forEach((element) => {
    if (group[element]) {
      group[element]++;
    } else {
      group[element] = 1;
    }
  });
  const groupArray = Object.entries(group);

  groupArray.sort((a, b) => b[1] - a[1]);

  if (groupArray.length > 0) {
    return A.findIndex((x) => x === parseInt(groupArray[0][0]));
  }

  return;
}

// const array = [3, 4, 3, 2, 3, -1, 3, 3];
// const array = [0, 0, 1, 1, 1];
const array = [0,0,1,1,1];
console.log(solution(array));
