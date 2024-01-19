var findMin = function (nums) {
    let half = Math.floor(nums.length / 2);
    if (nums.length === 1) {
        return nums[0];
    } else {
        if (nums[half] < nums[half - 1]) {
            return nums[half];
        } else {
            if (nums[nums.length - 1] >= nums[half]) {
                return Math.min(...nums.slice(0, half));
            } else {
                return Math.min(...nums.slice(half));
            }
        }
    }
};

console.log(findMin([1, 2]));