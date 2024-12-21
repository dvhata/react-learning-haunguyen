// 238. Product of Array Except Self
// https://leetcode.com/problems/product-of-array-except-self/description/

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

var productExceptSelf = function (nums) {
  var length = nums.length;
  var output = new Array(length * 2 - 2).fill(1);
  output[0] = nums[0];
  output[length * 2 - 3] = nums[length - 1];
  for (var i = 1; i < length - 1; i = i + 1) {
    output[i] = output[i - 1] * nums[i];
    output[length * 2 - 3 - i] =
      output[length * 2 - 2 - i] * nums[length - i - 1];
  }
  console.log("output: " + output);
  var output2 = new Array(length).fill(1);
  var length2 = output2.length;
  output2[0] = output[output.length / 2];
  output2[length - 1] = output[output.length / 2];
  console.log(output2);

  for (var i = 1; i < length2 - 1; i = i + 1) {
    console.log("i = " + i);
    console.log(output.length / 2 + i);
    console.log(output[output.length / 2 + i]);

    output2[i] = output[output.length / 2 + i] * output[i - 1] || 1;
  }
  // console.log(output);
  console.log(output2);
};

// productExceptSelf([1, 2, 3, 4]); // [24,12,8,6]
productExceptSelf([-1, 1, 0, -3, 3]); // [0,0,9,0,0]
