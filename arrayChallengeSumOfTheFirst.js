// =================== PROBLEM DESCRIPTION ===================
/*
Problem Name: Two Sum
Can be Find in: https://coderbyte.com/
Coderbyte Difficulty: Medium
My Difficulty: A(Medium)
Ps: it's a challenge from a selection process of a company, but to have access
to the problem outside the process it is necessary to pay the Coderbyte Subscription.
*/
// ===========================================================



const arrayChallenge = (array) => {
  const expected = array.shift();
  const pairs = findPairs(array, expected);
  
  if (pairs.length === 0) return -1;
  const sortedPairs = sortAndConvertToString(pairs, array);
  const sortedPairsString = sortedPairs.join(' ');
  const result = reverseString(sortedPairsString);

  return result;
};

const findPairs = (array, expected) => {
  const pairs = [];
  const len = array.length;
  for (let i = 0 ; i < len ; i++) {
    for (let j = i+1 ; j < len ; j++) {
      if (array[i] === array[j])
        continue;
      if(array[i] + array[j] === expected)
        pairs.push([array[i], array[j]]);
    }
  }
  return pairs;
};

const sortAndConvertToString = (pairs, originArray) => {
  const sortedPairs = [];
  pairs.forEach((pair) => {
    [a,b] = pair;
    if (originArray.indexOf(a) < originArray.indexOf(b))
      sortedPairs.push(`${a},${b}`);
    else
      sortedPairs.push(`${b},${a}`);
  });
  return sortedPairs;
}

const reverseString = (str) => str.split('').reverse().join('');
// ============================== TESTS ==============================

const arr = [7, 6, 4, 1, 7, -2, 3, 12];
console.log(arrayChallenge(arr));
