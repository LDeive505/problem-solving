// =================== PROBLEM DESCRIPTION ===================
/*
Problem Name: Drawing Book
Problem Link: https://www.hackerrank.com/challenges/drawing-book/problem?isFullScreen=true
HackerRank Difficulty: Easy
My Difficulty: C (Easy)
*/
// ==========================================================


function pageCount(n, p) {  
  const middle = n/2;
  
  if (n-p > middle)
    return parseInt(p/2)
  if (p === 1)
    return 0
  if (n%2 === 0 && n-p === 1)
    return 1

  return parseInt((n-p)/2) 
}