/**
 You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.
 */
// var maxArea = function(height) {
//     //determine variables for length and width 
//     let maxVolume = 0;
    
//     //iterate through array
//     for (let i = 0; i<height.length; i++) {
//         for (let j = height.length-1; j>=0; j--) {
//             let length = Math.abs(j-i);
//             // console.log(height[i], 'and', height[j])
//             maxVolume = Math.max(maxVolume, (length*(Math.min(height[j],height[i]))))
//         }
        
//     }
    
//     return maxVolume
// };
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    //determine variables for length and width 
    let maxVolume = 0;
    
    //iterate through array
    if (height.length===2) {
        return Math.min(height[0],height[1])
    }
    for (let i = 0; i<height.length; i++) {
        for (let j = height.length-1; j>i; j--) {
            
            let lol = Math.min(height[j],height[i])
            let length = j-i;
            // console.log(height[i], 'and', height[j])
            
            maxVolume = Math.max(maxVolume, (length*lol))
            
        }
        
    }
    
    return maxVolume
};
