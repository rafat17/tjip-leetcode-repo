// Time Complexity: O(n)
// Space Complexity:O(n)

var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;

  const numsSet = new Set(nums);
  let maxSequence = 1;

  for (let num of numsSet) {
    let currentSequence = 1;
    let currentNum = num;

    while (numsSet.has(currentNum - 1)) {
      currentSequence++;
      currentNum--;
    }

    maxSequence = Math.max(maxSequence, currentSequence);
  }

  return maxSequence;
};
