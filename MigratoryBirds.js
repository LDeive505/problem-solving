// =================== PROBLEM DESCRIPTION ===================
/*
Problem Name: Migratory Birds
Problem Link: https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=true
HackerRank Difficulty: Easy
My Difficulty: D (Easy)
*/
// ===========================================================


function migratoryBirds(arr) {
  let [type, count] = [5,0];
  const idsCount = arr.reduce((acc, id)=> {
    if (id in acc)
      acc[id] += 1
    else
      acc[id] = 1
      
    return acc
  }, {})
  
  for (const key in idsCount) {
    if (idsCount[key] > count) {
      type = key
      count = idsCount[key]
    }
  }
  return type
}