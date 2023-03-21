/*
=================== PROBLEM DESCRIPTION ===================

Problem Name: Queen's Attack II
Problem Link: https://www.hackerrank.com/challenges/queens-attack-2/problem?isFullScreen=true
HackerRank Difficulty: Medium
My Difficulty: S (Medium-Hard)

*/ 

function queensAttack(n, k, qR, qC, obstacles) {
  if(n === 1) return 0;

  const queenPos = [qR,qC];
  const obs = new Set(obstacles.map(([a,b])=> `${a},${b}`));
  const directions = [[0,1],[0,-1],[1,0],[-1,0],[1,1],[-1,-1],[-1,1],[1,-1]];

  return directions.reduce((acc, dir)=> acc + countMoves(n,queenPos,dir,obs), 0);  
}

function countMoves(size, queenPos, directions, obs) {
  let [row, col] = queenPos;
  const [iR, iC] = directions;
  let count = 0;
  row += iR; col += iC;
    
  while(row > 0 && row <= size && col > 0 && col <= size) {
    if(obs.has(`${row},${col}`)) break;
    count += 1;
    row += iR; col += iC;
  }
  return count;
}