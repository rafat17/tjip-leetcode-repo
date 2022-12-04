// Time Complexity: O(n)
// Space Complexity: 0(n)

var twoSum = function (nums, target) {
  const numsMap = {};

  for (let i = 0; i < nums.length; i++) {
    const numberValue = nums[i];
    const complementIndex = numsMap[numberValue];

    if (complementIndex !== undefined) {
      return [complementIndex, i];
    } else {
      const complementaryNumber = target - numberValue;
      numsMap[complementaryNumber] = i;
    }
  }
};
