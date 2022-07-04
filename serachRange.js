var searchRange = function(nums, target) {
    let results = [];
    let startIndex = -1;
    let maxIndex = -1;
    if (nums.length===1) {
        if (target==nums[0]) {
        return [0, 0];
        } else {
        return [-1,-1];
        }
    }
    if (nums.length===2) {
        if (target==nums[0]) {
            if (target==nums[1]) {
              return [0, 1];
            } else {
                return [0, 0];
            }
        } else if (target === nums[1]) {
                return [1, 1]
            } else {
        return [-1,-1];
        }
    }
    
    for ( let i=0; i<nums.length; i++) {
        if (target === nums[i]) {
            if (nums[i-1] === target) {
                maxIndex = i;
            } else {
                startIndex = i;
                maxIndex = i;
            }
        }
        
    }
    
    results.push (startIndex);
    results.push (maxIndex);
    
    return results;
    
};
