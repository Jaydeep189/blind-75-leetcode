var search = function (nums, target) {
    let half = Math.floor(nums.length / 2);
    if (nums[nums.length - 1] >= nums[half]) {
        return Math.min(...nums.slice(0, half));
    } else {
        return Math.min(...nums.slice(half));
    }
};

console.log(findMin([1, 2]));