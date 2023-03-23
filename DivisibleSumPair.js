// =================== PROBLEM DESCRIPTION ===================
/*
Problem Name: Divisible Sum Pairs
Problem Link: https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?isFullScreen=true
HackerRank Difficulty: Easy
My Difficulty: D (Very Easy)
*/
// ===========================================================


function divisibleSumPairs(n, k, ar) {
  let count = 0
  
  for (let i = 0 ; i< n ; i+=1) {
    for (let j = 0 ; j< n ; j+=1) {
      if (i === j)
        continue
      if ((ar[i] + ar[j])%k === 0)
      count += 1
    }
  }
  
  return count/2
}