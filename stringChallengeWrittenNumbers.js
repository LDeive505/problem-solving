// =================== PROBLEM DESCRIPTION ===================
/*
Problem Name: String Expression
Can be Find in: https://coderbyte.com/
Coderbyte Difficulty: Medium
My Difficulty: A(Medium)
Ps: it's a challenge from a selection process of a company, but to have access
to the problem outside the process it is necessary to pay the Coderbyte Subscription.
*/
// ===========================================================


const numbers = { zero: '0', one: '1', two: '2', three: '3', four: '4', five: '5', six: '6', seven: '7', eight: '8', nine: '9' };
const operators = { minus: '-', plus: '+' };

const stringExpression = (str) => {
  const values = convertInValues(str);
  const operations = createOperations(values);
  let result = resolveOperations(operations)
  result = writtenVersion(result);
  result = reverseString(result);
  return result;
};

const convertInValues = (str) => {
  const strArray = str.split('');
  const values = [];
  let buffer = '';

  strArray.forEach((value) => {
    buffer += value;
    if (numbers[buffer]) {
      values.push(numbers[buffer]);
      buffer = '';
    }
    if (operators[buffer]) {
      values.push(operators[buffer]);
      buffer = '';
    }
  });
  return values;
};

const createOperations = (values) => {
  buffer = '';
  let operations = [];

  values.forEach((value) => {
    if (value === '+' || value === '-') {
      operations.push(Number(buffer));
      operations.push(value);
      buffer = '';
    } else {
      buffer += value;
    }
  });
  operations.push(Number(buffer));
  return operations;
};

const resolveOperations = (op) => {
  let result = op[0];
  const len = op.length;
  for (let i = 2 ; i < len ; i+=2) {
    const operator = op[i-1]
    if (operator === '+')
      result += op[i];
    else
      result -= op[i]
  }
  return result;
}

const writtenVersion = (value) => {
  const arrayValue = value.toString().split('');
  let result = '';
  arrayValue.forEach((value) => {
    if(value === '-')
      result += 'negative'
    else {
      result += Object.keys(numbers).find(key => numbers[key] === value); 
    }
  }); 
  return result;
}

const reverseString = (str) => str.split('').reverse().join('');

// ==================== TESTS ====================

let x = stringExpression('onezeropluseight');
console.log(x);
console.log(stringExpression('oneminusoneone'));
