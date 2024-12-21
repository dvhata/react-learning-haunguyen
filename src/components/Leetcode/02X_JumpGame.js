// 55. Jump Game
// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
// Return true if you can reach the last index, or false otherwise.

// ----------------------------------------------------------------

// Example 1:
// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

// ----------------------------------------------------------------

// Example 2:
// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

// Link: https://leetcode.com/problems/jump-game/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let newGoal = nums[0];
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] > 0) newGoal = nums[i];
    else {
      let index = i;
      let distance = 0;
      while (index >= 1) {
        distance = i + 1 - nums[index - 1];
        console.log("distance: " + distance);
        console.log("nums", nums[index - 1]);
        if (distance <= nums[index - 1]) return false;
        else newGoal = nums[index - 1];
        index--;
      }
    }
  }
  console.log("newGoal: " + newGoal);

  if (newGoal === nums[0]) return true;
  else return false;
};
nums1 = [2, 3, 1, 1, 4];
nums2 = [3, 2, 1, 0, 4];
nums3 = [0, 1];
nums4 = [0];
nums5 = [1, 0, 2];
nums6 = [2, 0];

canJump(nums6);
console.log(canJump(nums6));
