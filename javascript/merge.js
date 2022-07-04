var merge = function(intervals) {
  if (intervals.length === 0) {
    return intervals;
  }
  
  // sort by interval start
  intervals.sort((a, b) => a[0] - b[0]);
   
  const result = [intervals[0]];
  // merge interval one by one 
  for (let i = 1; i < intervals.length; i++) {
      const last = result[result.length - 1];
      const current = intervals[i];
      const [, lastEnd] = last;
      const [currentStart, currentEnd] = current;
      if (lastEnd < currentStart) {
        result.push(current);
      } else {
        last[1] = Math.max(lastEnd, currentEnd);
      }
  }
  return result;
};
