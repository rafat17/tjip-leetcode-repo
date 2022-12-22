// Time Complexity: O(nlogn) + 0(n)
// Space Complexity: O(n)

var mergeIntervals = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < intervals.length; i++) {
    
    if (i + 1 !== intervals.length) {

      if (intervals[i][1] >= intervals[i + 1][0]) {

        const mergedInterval = [
          intervals[i][0],
          Math.max(intervals[i][1], intervals[i + 1][1]),
        ];

        intervals[i] = mergedInterval;
        intervals.splice(i + 1, 1);
        i--;
      }
    }
    
  }

  return intervals;
};
