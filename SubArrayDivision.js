
// =================== PROBLEM DESCRIPTION ===================
/*
Problem Name: Subarray Division
Problem Link: https://www.hackerrank.com/challenges/the-birthday-bar/problem?isFullScreen=true
HackerRank Difficulty: Easy
My Difficulty: C (Easy)
*/
// ===========================================================


function birthday(s, d, m) {
  let count = 0;
  for (let i = 0; (i + m) <= s.length; i+=1){
      const subArray = s.slice(i,i+m);
      const sum = subArray.reduce((acc,n)=> acc + n, 0);
      if (sum === d) count += 1
  }
  
  return count
}
