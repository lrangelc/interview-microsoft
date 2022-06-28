// https://coderbyte.com/algorithm/stock-maximum-profit
function solution(arr) {
  let maxProfit = -1;
  let buyPrice = 0;
  let sellPrice = 0;

  // this allows our loop to keep iterating the buying
  // price until a cheap stock price is found
  let changeBuyIndex = true;

  // loop through list of stock prices once
  for (let i = 0; i < arr.length - 1; i++) {
    // selling price is the next element in list
    sellPrice = arr[i + 1];

    // if we have not found a suitable cheap buying price yet
    // we set the buying price equal to the current element
    if (changeBuyIndex) {
      buyPrice = arr[i];
    }

    // if the selling price is less than the buying price
    // we know we cannot make a profit so we continue to the
    // next element in the list which will be the new buying price
    if (sellPrice < buyPrice) {
      changeBuyIndex = true;
      continue;
    }

    // if the selling price is greater than the buying price
    // we check to see if these two indices give us a better
    // profit then what we currently have
    else {
      const tempProfit = sellPrice - buyPrice;
      if (tempProfit > maxProfit) {
        maxProfit = tempProfit;
      }
      changeBuyIndex = false;
    }
  }

  return maxProfit;
}
