// 167. Two Sum II - Input Array Is Sorted
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/

var twoSum = function (numbers, target) {
  var left = 0;
  var right = numbers?.length - 1;

  while (left < right) {
    var sum = numbers[left] + numbers[right];
    if (sum === target) return [left + 1, right + 1];
    else if (sum < target) left++;
    else right--;
  }
  return [];
};
console.log(twoSum([2, 7, 11, 15], 9));
