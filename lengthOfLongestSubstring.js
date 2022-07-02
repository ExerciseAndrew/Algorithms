var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let right = 0;
    let chars = {};
    let res = 0;
    while (right < s.length) {
        let r = s[right];
        if (chars[r]) {
            chars[r]++;
        } else {
        chars[r]=1;
        }
        while(chars[r] > 1) {
            let l = s[left];
            if (chars[l]) {
                chars[l]--;
            } else {
                chars[l]=1;
            }      
            left++;
        }
        res = Math.max(res, (right - left)+1);
        right ++;
    }
    return res;
};
