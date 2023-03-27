// =================== PROBLEM DESCRIPTION ===================
/*
Problem Name: Organizing Containers of Balls
Problem Link: https://www.hackerrank.com/challenges/organizing-containers-of-balls/problem?isFullScreen=true
HackerRank Difficulty: Medium
My Difficulty: A(Médio)
*/
// ===========================================================


function organizingContainers(container) {

  const totalContainers = container.map((con)=> sumArray(con));
  const totalBalls = Array(container[0].length).fill(0);
  let answer = 'Possible';
  
  container.forEach((con)=> {
    con.forEach((balls,i)=> {
      totalBalls[i] += balls
    });
  });
  
  const sortedContainers = totalContainers.sort()
  const sortedBalls = totalBalls.sort();
  
  sortedBalls.forEach((ballType, i)=> {
    if (ballType !== sortedContainers[i])
      answer = 'Impossible';
  });
  
  return answer
}

const sumArray = (arr) => arr.reduce((acc,v) => acc + v, 0);