console.clear();
console.log(`Brackets`);

const S = '{[()()]}';
// const S = '([)()]';

function solution(S) {
  const balance = {
      '(': ')',
      '{': '}',
      '[': ']'
  };
  const arrayNeg = [];

  let valid = true;
  let index = 0;
  const myArray = S.split('');

  while (valid && index < myArray.length) {
      const element = myArray[index];
      if (balance[element]) {
          arrayNeg.push(balance[element]);
      } else {
          if (arrayNeg.length > 0) {
              const pop = arrayNeg.pop();
              if (pop !== element) {
                  valid = false;
              }
          } else {
              valid = false;
          }
      }

      index++;
  }

  return valid && arrayNeg.length === 0 ? 1 : 0;

}

console.log(solution(S));
