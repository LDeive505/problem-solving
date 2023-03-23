// =================== PROBLEM DESCRIPTION ===================
/*
Problem Name: Sales by Match
Problem Link: https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true
HackerRank Difficulty: Easy
My Difficulty: B (Easy-Medium)
*/
// ==========================================================


function sockMerchant(n, ar) {
  const countPairs = {};

  ar.forEach(item => {
      countPairs[item] = (countPairs[item] || 0) + 1;
  });

  const pairsCount = Object.values(countPairs).reduce((acc, v)=> {
      return acc + Math.floor(v/2)
  },0);
  
  return pairsCount;
}