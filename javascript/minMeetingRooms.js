var minMeetingRooms = function(intervals) {
    if (intervals.length === 0) {
        return 0;
    }
    intervals.sort((a, b) => a[0]-b[0]);
    let minPQ = new MinPriorityQueue();
    for (const interval of intervals) {
        if (minPQ.size()===0) {
            minPQ.enqueue(interval[0], interval[1]);
        } else {
            if (interval[0] >= minPQ.front().priority) {
                minPQ.dequeue()
                minPQ.enqueue(interval[0], interval[1]);
            } else {
                minPQ.enqueue(interval[0], interval[1]);
            }
        }
    }
    return minPQ.size();
    
};
