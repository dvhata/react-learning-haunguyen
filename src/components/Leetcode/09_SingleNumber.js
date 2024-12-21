// 136. Single Number
// https://leetcode.com/problems/single-number/description/?envType=problem-list-v2&envId=array

// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4 (element appears once)

// Đếm số lần xuất hiện của phần tử trong mảng
var singleNumber2 = function (nums) {
  var chars = {};
  nums?.forEach((item) => {
    console.log("item: " + item);
    chars[item] = (chars[item] || 0) + 1;
  });
};

// singleNumber2([4, 1, 2, 1, 2]);

var singleNumber = function (nums) {
  return nums?.reduce((prev, cur) => {
    return prev ^ cur;
  }, 0);
};

console.log(singleNumber([4, 1, 2, 1, 2]));
