// Time Complexity: O(nlogn) + O(n)
// Space Complexity: O(n)

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

const intervals = [new Interval(2, 7), new Interval(0)];

const minMeetingRooms = (intervals) => {
  if (intervals.length === 0) return 0;

  let meetingTimeOverlaps = 0;

  let maxEndTime = intervals[0].end;

  intervals.sort((a, b) => a - b);

  for (let i = 1; i < intervals.length; i++) {
    const currentStartTime = intervals[i].start;
    const currentEndTime = intervals[i].end;

    if (currentStartTime < maxEndTime) {
      meetingTimeOverlaps = meetingTimeOverlaps + 1;
    }

    if (currentEndTime > maxEndTime) {
      maxEndTime = currentEndTime;
    }
  }

  const mininumMeetingRooms = Math.max(1, meetingTimeOverlaps);

  return mininumMeetingRooms;
};
