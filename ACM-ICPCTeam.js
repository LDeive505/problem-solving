/*
=================== PROBLEM DESCRIPTION ===================

Problem Name: ACM ICPC Team
Problem Link: https://www.hackerrank.com/challenges/acm-icpc-team/problem?isFullScreen=true
HackerHank Difficulty: Easy
My Difficulty: B(Easy-Medium)

*/ 

function acmTeam(topic) {
  let maxTopics = 0;
  let teamsCount = 0;

    topic.forEach((t1) => {
      topic.forEach((t2)=> {
        const count = countMergedTopics(t1,t2);
        if (count > maxTopics) {
          maxTopics = count;
          teamsCount = 1;
        }
        else if (count === maxTopics) teamsCount += 1;
      });
    });

  return [maxTopics, teamsCount/2];
}

function countMergedTopics(t1,t2) {
  let count = 0;
  for(let i = 0 ; i < t1.length; i++)
    if(t1[i]=== '1' || t2[i] === '1') count += 1;

  return count;
}




// ==================== TESTS ======================

let x = [ '10101', '11100', '11010', '00101' ];

let res = acmTeam(x);
console.log(res);