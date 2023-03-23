// =================== PROBLEM DESCRIPTION ===================
/*
Problem Name: Dash Insert II
Can be Find in: https://coderbyte.com/
Coderbyte Difficulty: Medium
My Difficulty: A(Medium)
Ps: it's a challenge from a selection process of a company, but to have access
to the problem outside the process it is necessary to pay the Coderbyte Subscription.
*/
// ===========================================================
 
 
 
 const stringChallenge = (str) => {
  const arrayStr = str.split('').map((char) => Number(char));
  const newStr = [];
  newStr.push(arrayStr[0]);
  const len = arrayStr.length;

  for (let i = 1 ; i < len ; i+= 1) {
    const current = arrayStr[i];
    const previous = arrayStr[i-1];
    if (current === 0 || previous === 0) {
      newStr.push(current);
      continue;
    }
    if (current % 2 === 0 && previous % 2 === 0) 
      newStr.push('*', current);
    else if(current % 2 !== 0 && previous % 2 !== 0)
      newStr.push('-', current);
    else
      newStr.push(current);
  }

  return newStr.reverse().join('');

 };

 // ============================== TESTS ==============================

  const str = '56647304';
  console.log(stringChallenge(str));

  const removeTokenChars = (str) => {
    const token = 'qktnbae358'
    const len = str.length
    let result = ''
    for(let i = 0; i < len ; i+=1) {
      if (!token.includes(str[i]))
        result += str[i]
    }
  
    return result
  }