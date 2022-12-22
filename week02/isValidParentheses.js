// Time Complexity: O(n), n = number of character in string s
// Space Complexity: O(n)


// checks if the brackets in a string are complimentary
const areParenthesesComplimentary = (parenthesisOnTop, currentParenthesis) => {
  const firstBracketComplimentary =
    parenthesisOnTop.match(/[(]/) && currentParenthesis.match(/[)]/);
  const secondBracketComplimentary =
    parenthesisOnTop.match(/[{]/) && currentParenthesis.match(/[}]/);
  const thirdBracketComplimentary =
    parenthesisOnTop.match(/[[]/) && currentParenthesis.match(/[\]]/);

  if (
    firstBracketComplimentary ||
    secondBracketComplimentary ||
    thirdBracketComplimentary
  ) {
    return true;
  }

  return false;
};

// main function to check valid parentheses
var isValid = function (s) {
  const parenthesesStack = [];

  for (let i = 0; i < s.length; i++) {
    const currentParenthesis = s[i];

    if (parenthesesStack.length === 0) {
      parenthesesStack.push(currentParenthesis);
    } else {
      const currentParenthesisOnTop =
        parenthesesStack[parenthesesStack.length - 1];

      if (
        areParenthesesComplimentary(currentParenthesisOnTop, currentParenthesis)
      ) {
        parenthesesStack.pop();
      } else {
        parenthesesStack.push(currentParenthesis);
      }
    }
  }

  const validParentheses = parenthesesStack.length === 0;
  return validParentheses;
};
