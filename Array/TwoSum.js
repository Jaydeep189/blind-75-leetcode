// first approch
// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 console.log("enter");
//                 return [i, j]
//             }
//         }
//     }
// };

// second approch

var twoSum = (nums, target) => {
    let remainders = {};
    for (let i = 0; i < nums.length; i++) {
        let remainder = target - nums[i];
        if (remainder in remainders) {
            return [remainders[remainder], i];
        }
        remainders[nums[i]] = i
        console.log(remainders);
    }
}

console.log(twoSum([3, 3], 6));