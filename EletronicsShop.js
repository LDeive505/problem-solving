// =================== PROBLEM DESCRIPTION ===================
/*
Problem Name: Eletronics Shop
Problem Link: https://www.hackerrank.com/challenges/counting-valleys/problem?isFullScreen=true
HackerRank Difficulty: Easy
My Difficulty: B (Easy-Medium)
*/
// ==========================================================


function getMoneySpent(keyboards, drives, b) {
  let budget = -1, diff = b;

  for(const kPrice of keyboards) {
    for(const dPrice of drives) {
      const currBuget = kPrice + dPrice
      const currDiff = b - currBuget
      
      if(currDiff < 0) continue;

      if (currBuget <= b && currDiff < diff) {
        budget = currBuget
        diff = currDiff
      }
    }
  }
  
  return budget
}
