function finding(dp, str, pattern, n, m) {
  // return 1 if n and m are negative
  if (n < 0 && m < 0) return 1;

  // return 0 if m is negative
  if (m < 0) return 0;

  // return n if n is negative
  if (n < 0) {
    // while m is positive
    while (m >= 0) {
      if (pattern[m] !== '*') return 0;
      m--;
    }
    return 1;
  }

  // if dp state is not visited
  if (dp[n][m] === -1) {
    if (pattern[m] === '*') {
      return (dp[n][m] = finding(dp, str, pattern, n - 1, m) || finding(dp, str, pattern, n, m - 1));
    } else {
      if (pattern[m] !== str[n] && pattern[m] !== '?') return (dp[n][m] = 0);
      else return (dp[n][m] = finding(dp, str, pattern, n - 1, m - 1));
    }
  }

  // return dp[n][m] if dp state is previsited
  return dp[n][m];
}

function isMatch(str, pattern) {
  // dp = [];
  let dp = [];

  // resize the dp array
  dp = new Array(str.length + 1).fill(1).map(() => new Array(pattern.length + 1).fill(-1));
  return (dp[str.length][pattern.length] = finding(dp, str, pattern, str.length - 1, pattern.length - 1));
}

// let str = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
// let pattern = '*b';

let str = 'baaabab';
let pattern = '*****ba*****ab';

// char pattern[] = "ba*****ab";
// char pattern[] = "ba*ab";
// char pattern[] = "a*ab";
// char pattern[] = "a*****ab";
// char pattern[] = "*a*****ab";
// char pattern[] = "ba*ab****";
// char pattern[] = "****";
// char pattern[] = "*";
// char pattern[] = "aa?ab";
// char pattern[] = "b*b";
// char pattern[] = "a*a";
// char pattern[] = "baaabab";
// char pattern[] = "?baaabab";
// char pattern[] = "*baaaba*";

if (isMatch(str, pattern)) console.log('Yes');
else console.log('No');

// https://www.geeksforgeeks.org/wildcard-pattern-matching/

// Time complexity: O(m x n).

// Auxiliary space:  O(m x n).
