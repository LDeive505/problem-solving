// =================== PROBLEM DESCRIPTION ===================
/*
Problem Name: Diagonal Difference
Problem Link: https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true
HackerRank Difficulty: Easy
My Difficulty: C (Easy)
*/
// ===========================================================



function diagonalDifference(arr) {
  const max = arr[0].length;
  let f1 = 0;
  let f2 = 0;
  for (let i=0 ; i<max ; i+=1) {
      for(let j=0 ; j<max ; j+=1) {
          if (i === j)
              f1 += arr[i][j]
          if ((i+j) === (max-1))
          f2 += arr[i][j]
      }
  }
  return Math.abs(f1 - f2)
}