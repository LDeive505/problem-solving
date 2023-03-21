// =================== PROBLEM DESCRIPTION ===================
/*
Problem Name: Plus Minus
Problem Link: https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true
HackerRank Difficulty: Easy
My Difficulty: C(Easy)
*/
// ===========================================================

function plusMinus(arr) {
  const len = arr.length
  let p=0, n=0, z=0

  for (let i = 0; i<len; i+=1) {
      if (arr[i] > 0)
          p += 1
       if (arr[i] < 0)
          n += 1
       if (arr[i] === 0)
          z += 1
  }
  
  p = (p/len).toFixed(6)
  n = (n/len).toFixed(6)
  z = (z/len).toFixed(6)
  console.log(`${p}\n${n}\n${z}`) 
}