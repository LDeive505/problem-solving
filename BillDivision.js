// =================== PROBLEM DESCRIPTION ===================
/*
Problem Name: Bill Division
Problem Link: https://www.hackerrank.com/challenges/bon-appetit/problem?isFullScreen=true
HackerRank Difficulty: Easy
My Difficulty: D (Easy)
*/
// ==========================================================


function bonAppetit(bill, k, b) {
  const sharedBill = bill.filter((_v,i) => i !== k)
  const annaBill = sharedBill.reduce((acc, v) => acc + v, 0) / 2;
  if (annaBill === b)
      console.log('Bon Appetit')
  else
      console.log(b - annaBill)
}
