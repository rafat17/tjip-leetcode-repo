// Time Complexity: O(s), s = number of characters in string s
// Space Complexity: O(s)


var isAnagram = function (s, t) {
  const sCharCountMap = {};
  const tCharCountMap = {};

  let isAnagram = true;

  if (s.length === t.length) {
    for (let i = 0; i < s.length; i++) {
      const currentCharInS = s[i];
      const currentCharInT = t[i];

      if (sCharCountMap[currentCharInS] !== undefined) {
        sCharCountMap[currentCharInS] += 1;
      } else {
        sCharCountMap[currentCharInS] = 1;
      }

      if (tCharCountMap[currentCharInT] !== undefined) {
        tCharCountMap[currentCharInT] += 1;
      } else {
        tCharCountMap[currentCharInT] = 1;
      }
    }

    const sCharKeys = Object.keys(sCharCountMap);

    for (let i = 0; i < sCharKeys.length; i++) {
      const currentCharKey = sCharKeys[i];
      if (sCharCountMap[currentCharKey] !== tCharCountMap[currentCharKey]) {
        isAnagram = false;
        break;
      }
    }
  } else {
    isAnagram = false;
  }

  return isAnagram;
};
