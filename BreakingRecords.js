// =================== PROBLEM DESCRIPTION ===================
/*
Problem Name: Breaking the Records
Problem Link: https://www.hackerrank.com/challenges/
HackerRank Difficulty: Easy
My Difficulty: C(Easy)
*/
// ===========================================================


function breakingRecords(scores) {
  let min = scores[0], max = scores[0];
  let minRecordCount = 0, maxRecordCount = 0;
  
  scores.forEach((score)=> {
      if (score > max) {
          max = score
          maxRecordCount +=1
      }
      if (score < min) {
          min = score
          minRecordCount +=1
      }
  });
  return [maxRecordCount, minRecordCount];
}
