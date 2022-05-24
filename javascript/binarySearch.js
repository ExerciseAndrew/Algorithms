//recursive

const bsearch = (nums, t, start,end) => {
    if(start > end) return -1;
    const mid = start+Math.floor((end-start)/2);
   
    if (nums[mid] == t) {
        return mid;
    }
    if (nums[mid] > t) {
        return bsearch(nums, t, start, mid-1);
    } else {
        return bsearch(nums, t, mid+1, end);
    }
}
var search = function(nums, target) {
    return bsearch(nums, target, 0, nums.length-1);
};
