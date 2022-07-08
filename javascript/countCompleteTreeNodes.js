/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

 

//helper function section

//function for checking depth
const countDepth = (node) => {
   let d = 0;
   while (node.left!== null) {
       node = node.left;
       d++;
       // countDepth(node);
   }
   return d;
}

//function to check for existance of nodes
const probe = (idx, d, node) => {
   let left = 0;
   let right = Math.pow(2, d) - 1;
   let pivot; 
   for (let i = 0; i < d; i++) {
       pivot = left + Math.floor((right - left) / 2);
       if (idx <= pivot) {
           node = node.left;
           right = pivot;
       } else {
           node = node.right;
           left = pivot + 1;
       } 
   }
   return node !== null;
}
//helper section complete

//meat and tatoes below

const countNodes = function(root) {
    if (root === null) {
        return 0;
    }
    
    let d = countDepth(root);
    if (d===0) {
        return 1;
    }
    
    let left = 1;
    let right = Math.pow(2, d) - 1;
    let pivot;    
    while (left <= right) {
        pivot = left + (right - left) / 2;
        if (probe(pivot, d, root)) {
            left = pivot + 1;
        } else {
            right = pivot - 1;
        }
    }
    return (Math.pow(2, d) - 1 + left);    
};
