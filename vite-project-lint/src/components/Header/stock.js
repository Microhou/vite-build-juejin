// [7,1,5,3,6,4]
// [4,1,5,3,6,4]

function getMax(arraySt) {
  let priceMax = arraySt[0];
  let maxCount = 0;
  for (let i = 1; i < arraySt.length; i++) {
    if (arraySt[i] > priceMax) {
      priceMax = arraySt[i];
    } else if (priceMax - arraySt[i] > maxCount) {
      maxCount = priceMax - arraySt[i];
    }
  }

  return maxCount;
}
console.log(getMax([4, 1, 5, 3, 6, 4]));
console.log(getMax([7, 1, 5, 3, 6, 4]));

// function maxProfit(prices) {
//   let maxProfit = 0;
//   let minPrice = prices[0];
//   for (let i = 1; i < prices.length; i++) {
//     if (prices[i] < minPrice) {
//       minPrice = prices[i];
//     } else if (prices[i] - minPrice > maxProfit) {
//       maxProfit = prices[i] - minPrice;
//     }
//   }
//   return maxProfit;
// }
