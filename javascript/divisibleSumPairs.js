/*
Given an array of integers and a positive integer, k, determine the number of 
(i, j) pairs where i<j and ar[i] + ar[j] is divisible by k.

ex:
ar=[1,2,3,4,5,6]
k=5
Three pairs meet the criteria: [1,4],[2,3] and [4,6]

*/
//there must be a better way than this
function divisibleSumPairs(n, k, ar) {
    //loop through array with i and j (2 nested loops)
    let count = 0;
    for (let j=1; j<n; j++) {
        for (let i=0; i<j; i++) {
          if ((ar[i] + ar[j]) % k === 0){
              count++;
              }
        } 
    }
    return count;
}
