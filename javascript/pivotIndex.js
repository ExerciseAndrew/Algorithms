var pivotIndex = function(nums) {
    if (nums.length=== 0) {
        return -1
    } 
    if (nums.length===1) {
        return 0
    }
    const totalSum = nums.reduce((acc, cur) => acc + cur)
    let leftSum = 0;
    
    for(let i = 0; i< nums.length; i++) {
        if (leftSum === totalSum - leftSum - nums[i]) {
            return i;
        }
        leftSum += nums[i]
    }
    return -1;
};
