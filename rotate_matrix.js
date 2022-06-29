console.clear();

// Inplace rotate square matrix by 90 degrees | Set 1

// Difficulty Level : Hard

// Complexity Analysis:

// Time Complexity: O(n2), where n is side of array.
// A single traversal of the matrix is needed.
// Space Complexity: O(1).
// As a constant space is needed

// An Inplace function to
// rotate a N x N matrix
// by 90 degrees in
// anti-clockwise direction
function rotateMatrix(N, mat) {
  // Consider all squares one by one
  for (let x = 0; x < N / 2; x++) {
    // Consider elements in group
    // of 4 in current square
    for (let y = x; y < N - x - 1; y++) {
      // Store current cell in
      // temp variable
      let temp = mat[x][y];

      // Move values from right to top
      mat[x][y] = mat[y][N - 1 - x];

      // Move values from bottom to right
      mat[y][N - 1 - x] = mat[N - 1 - x][N - 1 - y];

      // Move values from left to bottom
      mat[N - 1 - x][N - 1 - y] = mat[N - 1 - y][x];

      // Assign temp to left
      mat[N - 1 - y][x] = temp;
    }
  }
  return mat;
}

// Function to print the matrix
function displayMatrix2(N, mat) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) console.log(' ' + mat[i][j]);

    console.log('<br>');
  }
  console.log('<br>');
}

const displayMatrix = (mat) => {
  mat.forEach((element) => console.log(element));
  console.log('');
};

/* Driver program to test above functions */
// let N = 4;

// let mat = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
// ];
// let N = 2;
// let mat = [
//   [1, 2],
//   [3, 4],
// ];
let N = 3;
let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// console.log(mat);
displayMatrix(mat);
// displayMatrix(mat);
const res = rotateMatrix(N, mat);
// console.log(res);

displayMatrix(res);
// Print rotated matrix

// displayMatrix(N, mat);
