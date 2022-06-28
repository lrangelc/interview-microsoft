// Detected time complexity:
// O(N)

// http://straightdeveloper.com/codility-com-maxslicesum-task-javascript-solution-100/

// however that won’t be enough because in case the array A contains only negative numbers then the result won’t be correct, for example:

// A=[-1]

// the function will return 0 while the right answer is -1 !

// In order to take care of this exception all we need to do is to add a variable that keeps note of the highest number of the array while we iterate over each element, once the loop is done, if the max slice sum is equal to zero which is 99% when the array contains only negative values, in this case we return the highest number from the array instead of returning zero simply because the sum of two or more negative numbers will never be greater than the value of one them. Here’s the full solution :

function solution(A) {
  let sum = 0;
  let max = A[0];
  let maxCell = A[0];
  for (a of A) {
    sum = Math.max(0, sum + a);
    max = Math.max(max, sum);
    maxCell = Math.max(maxCell, a);
  }
  if (max == 0) {
    return maxCell;
  }
  return max;
}
