// =================== PROBLEM DESCRIPTION ===================
/*
Problem Name: HTML Elements
Can be Find in: https://coderbyte.com/
Coderbyte Difficulty: Medium
My Difficulty: A(Medium)
Ps: it's a challenge from a selection process of a company, but to have access
to the problem outside the process it is necessary to pay the Coderbyte Subscription.
*/
// ===========================================================



const stringChallengeDomElements = (str) => {
  const len = str.length;
  let i = 0;
  const strTags = [];
  let buffer = '';

  while (i < len) {
    buffer += str[i];
    let end = buffer.length - 1
    if (buffer[0] === '<' && buffer[end] === '>') {
      strTags.push(buffer);
      buffer = '';
    }
    i++;
    if (buffer[0] !== '<') buffer = '';
  }

  const strLen = strTags.length;
  let brokenTag = '';
  strTags.forEach((tag, index) => {
    if (!tag.includes('/')) {
      const refArray = strTags.slice(index+1, strLen);
      const closeTag = refArray.find((ref) => ref.replace('/','') === tag);
      if (closeTag === undefined) brokenTag = tag.replace(/<|>/g,'');
    }

  });

  if (brokenTag !== '') return brokenTag;
  return 'true'
};

// ============================== TESTS ==============================

const str = '<div>abc</div><p><em><i>test test test </b></em></p>'
console.log(stringChallengeDomElements(str));