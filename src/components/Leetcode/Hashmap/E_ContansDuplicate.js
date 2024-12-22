// 217. Contains Duplicate
// https://leetcode.com/problems/contains-duplicate/description/

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

var containsDuplicate = function (nums) {
  var map = new Map();
  for (var i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) return true;
    map.set(nums[i], i);
  }
  return false;
};
console.log(containsDuplicate([1, 2, 3, 1])); //true

var containsDuplicate2 = function (nums) {
  var set = new Set(nums);
  return set.size < nums.length;
};
console.log(containsDuplicate([1, 2, 3, 1])); //true
