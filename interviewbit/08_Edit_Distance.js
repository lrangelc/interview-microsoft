// Given two strings A and B, find the minimum number of steps required to convert A to B. (each operation is counted as 1 step.)

// You have the following 3 operations permitted on a word:

// Insert a character
// Delete a character
// Replace a character

// https://www.geeksforgeeks.org/edit-distance-dp-5/

console.clear();

function min(x, y, z) {
  if (x <= y && x <= z) return x;
  if (y <= x && y <= z) return y;
  else return z;
}

function editDist(str1, str2, m, n) {
  // If first string is empty, the
  // only option is to insert all
  // characters of second string into first
  if (m == 0) return n;

  // If second string is empty, the only
  // option is to remove all characters
  // of first string
  if (n == 0) return m;

  // If last characters of two strings are
  // same, nothing much to do. Ignore last
  // characters and get count for remaining
  // strings.
  if (str1[m - 1] == str2[n - 1]) return editDist(str1, str2, m - 1, n - 1);

  // If last characters are not same, consider all
  // three operations on last character of first
  // string, recursively compute minimum cost for all
  // three operations and take minimum of three
  // values.
  return (
    1 +
    min(
      editDist(str1, str2, m, n - 1), // Insert
      editDist(str1, str2, m - 1, n), // Remove
      editDist(str1, str2, m - 1, n - 1)
    )
  ); // Replace
}

const minDistance = (str1, str2) => {
  return editDist(str1, str2, str1.length, str2.length);
};

// const A = 'abad';
// const B = 'abac';

const A = 'Anshuman';
const B = 'Antihuman';

// let A = 'EACBD';
// let B = 'EABCD';

console.log(minDistance(A, B));
