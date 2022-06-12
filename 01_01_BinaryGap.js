console.clear();
console.log(`BynaryGap`);

// const N = 529;
const N = 1041;
// const N = 32;

function solution(N) {
  let binaryValue = N.toString(2);
  const lastCharacter = binaryValue.slice(-1);

  if (lastCharacter === '0') {
    const lastOne = binaryValue.lastIndexOf('1');
    binaryValue = binaryValue.substring(0,lastOne + 1);
  }
  let myArray = binaryValue.split('1');

  myArray = myArray.filter((element) => element.length > 0);
  myArray.sort((a,b) => b.length - a.length);

  return myArray.length > 0 ? myArray[0].length : 0;
}

console.log(solution(N));
