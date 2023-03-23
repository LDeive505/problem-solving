// =================== PROBLEM DESCRIPTION ===================
/*
Problem Name: Greedy Florist
Problem Link: https://www.hackerrank.com/challenges/greedy-florist/problem?isFullScreen=true
HackerRank Difficulty: Medium
My Difficulty: A (Medium)
*/
// ==========================================================


function getMinimumCost(k, c) {
  const flowers = c.sort((a,b) => b - a)
  let friendCount = k, buyCount = 0
  let sum = 0
  
  flowers.forEach((price)=> {
    if (friendCount === 0) {
      friendCount = k
      buyCount += 1
    }
    
    sum += (buyCount + 1) * price
    friendCount -= 1
  });
  
  return sum
}