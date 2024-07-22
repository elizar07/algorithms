/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    let totalSum = nums.reduce((sum, num) => sum + num, 0);
    
    let leftSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        let rightSum = totalSum - leftSum - nums[i];
        
        if (leftSum === rightSum) {
            return i;
        }
        
        leftSum += nums[i];
    }
    
    return -1;
};

