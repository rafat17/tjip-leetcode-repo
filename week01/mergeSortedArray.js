// Time Complexity: 0(n) + 0(nlogn), n = number of inputs
// Space Complexity: 0(logn)

var merge = function (nums1, m, nums2, n) {
  if (m === 0 && n > 0) {
    let nums1Start = 0;

    while (nums1Start < n) {
      nums1[nums1Start] = nums2[nums1Start];
      nums1Start++;
    }

    return;
  }

  const totalLength = m + n;
  let nums2StartIndexInNums1 = m;

  while (nums2StartIndexInNums1 < totalLength) {
    const nums2Index = nums2StartIndexInNums1 - m;
    nums1[nums2StartIndexInNums1] = nums2[nums2Index];
    nums2StartIndexInNums1++;
  }

  nums1.sort((a, b) => a - b);
};
