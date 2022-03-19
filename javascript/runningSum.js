var runningSum = function(nums) {
    let sum = 0;
    let patsy = [];
    for (let i = 0; i < nums.length; i++) {
        sum+=nums[i]
        patsy.push(sum)
    }
    return patsy;
    
};
