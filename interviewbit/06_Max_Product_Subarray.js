console.clear();

const maxProduct = (arr) => {
  let n = arr.length;
  let result = arr[0];

  for (let i = 0; i < n; i++) {
    let mul = arr[i];
    // traversing in current subarray
    for (let j = i + 1; j < n; j++) {
      // updating result every time
      // to keep an eye over the maximum product
      result = Math.max(result, mul);
      mul *= arr[j];
    }
    // updating the result for (n-1)th index.
    result = Math.max(result, mul);
  }
  return result;
};

const A = [2, 3, -2, 4];

console.log(maxProduct(A));


// https://www.geeksforgeeks.org/javascript-program-for-maximum-product-subarray/

// Time complexity is O(n) and only O(1) extra space can be used.
// Time Complexity: O(N2)
// Auxiliary Space: O(1)