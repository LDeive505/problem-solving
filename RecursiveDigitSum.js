// =================== PROBLEM DESCRIPTION ===================
/*
Problem Name: Recursive Digit Sum
Problem Link: https://www.hackerrank.com/challenges/recursive-digit-sum/problem?isFullScreen=true
HackerRank Difficulty: Medium
My Difficulty: A (Medium)
*/
// ===========================================================


function superDigit(n, k) {
  const nArray = n.split('')
  const initSum = nArray.reduce((acc,v) => acc + Number(v) * k, 0)                                                                               
  let sum = 0
  let sDigit = String(initSum)
  
  while (sDigit > 10) {
    sum = 0;
    for (let i = 0; i< sDigit.length ; i+=1) {
        sum += Number(sDigit[i])
        console.log(sum);
    }
    sDigit = String(sum)
  }
  
  return Number(sDigit);
}

console.log(superDigit('148', 3))