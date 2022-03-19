var smallerNumbersThanCurrent = function(nums) {
    
    let results = [];
    
    for (let i = 0; i<nums.length; i++) {
        let count = 0;
        for (let j = 0; j<nums.length; j++) {
            if (nums[i] > nums[j]) {
                count++;
            }
        }
        results.push(count);
    }
    // const whatIsSmall = (current, list) => {
    //     let count = 0;
    //     let current = 0;
    // }
    return results;
};
