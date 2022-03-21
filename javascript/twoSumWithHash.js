var twoSum = function(nums, target) {
      let hash = {}
      for (let i = 0; i<nums.length; i++) {
          let value = i;
          let key = nums[i];
          let lookUp = target - nums[i]
          console.log(hash[lookUp])
          if (hash[lookUp] == undefined) {
              hash[key]=value;
          } else {
            return [i, hash[lookUp]]
          }
      }
};
