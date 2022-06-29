// Expand the string according to the given conditions

// nput: str = "3(ab)4(cd)"
// Output: abababcdcdcdcd
// Input: str = "2(kl)3(ap)"
// Output: klklapapap

// Function to expand and print the given string

// https://www.geeksforgeeks.org/expand-the-string-according-to-the-given-conditions/

// Time Complexity: O(N*N)
// Auxiliary Space: O(1)

function expandString(strin) {
  let temp = '';
  let j;
  let res = '';

  for (let i = 0; i < strin.length; i++) {
    if (strin[i].charCodeAt(0) >= 0) {
      // Subtract '0' to convert char to int
      let num = strin[i].charCodeAt(0) - '0'.charCodeAt(0);
      if (strin[i + 1] == '(') {
        // Characters within brackets
        for (j = i + 1; strin[j] != ')'; j++) {
          if ((strin[j] >= 'a' && strin[j] <= 'z') || (strin[j] >= 'A' && strin[j] <= 'Z')) {
            temp += strin[j];
          }
        }

        // Expanding
        for (let k = 1; k <= num; k++) {
          console.log(temp);
          res = `${res}${temp}`;
        }

        // Reset the variables
        num = 0;
        temp = '';

        if (j < strin.length) {
          i = j;
        }
      }
    }
  }
  return res;
}

// Driver code
let strin = '3(ab)4(x)';
// let strin = '3(ab)4(a)';
console.log(expandString(strin));
