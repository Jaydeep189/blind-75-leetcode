var containsDuplicate = function (nums) {
    let temp = []
    for (let i = 0; i < nums.length; i++) {
        if (temp.includes(nums[i])) {
            return true;
        }
        temp.push(nums[i])
    }
    return false;
};

console.log(containsDuplicate([2, 14, 18, 22, 22]));