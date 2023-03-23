// =================== PROBLEM DESCRIPTION ===================
/*
Problem Name: Counting Valleys
Problem Link: https://www.hackerrank.com/challenges/counting-valleys/problem?isFullScreen=true
HackerRank Difficulty: Easy
My Difficulty: C (Easy)
*/
// ==========================================================


function countingValleys(steps, path) {
  let level = 0, count = 0;
  path.split('').forEach((step)=> {
    level += (step === 'U') ? 1 : -1;
    if (level === 0 && step === 'U')
      count += 1
  });
  return count;
}
