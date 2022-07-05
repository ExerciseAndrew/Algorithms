const threeSum = function(nums) {
    //create result array
    let result = [];
    
    //sort nums array
    nums.sort((a,b) => a-b);
    
    //use for loop to set first pointer position
    for (let i = 0; i<nums.length; i++) {
        //create 'current' pointer
        let current = nums[i] 
        //create a left pointer
        let left = i + 1;
        //create a right pointer
        let right = nums.length-1;
        //
        if (i > 0 && nums[i] === nums[i-1]) {
            continue;
        }
        //
        while (left<right) {
            let leftNum = nums[left];
            let rightNum = nums[right];
            let sum = leftNum + rightNum + current;
            if (sum === 0) {
                result.push([current, leftNum, rightNum]);
                while (nums[left] === nums[left+1]) {
                    left++;
                }
            left++;
            } else if (sum > 0){
                right--;
            } else {
                left++;
            }
        }
    }
    return result;
};
