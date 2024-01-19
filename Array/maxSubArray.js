var maxSubArray = function (nums) {
    let maxValue = nums[0];
    let currentSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxValue = Math.max(maxValue, currentSum);
    }
    return maxValue;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));