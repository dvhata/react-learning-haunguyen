// https://leetcode.com/problems/3sum/description/
// 15.3Sum

// return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

function removeDuplicates(arr) {
  // Use a Set to keep unique arrays as strings
  const unique = new Set(arr.map(JSON.stringify));

  // Convert back to array of arrays
  return Array.from(unique).map(JSON.parse);
}

var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  var map = new Map();
  for (var i = 0; i < nums.length; i++) {
    map.set(0 - nums[i], [i, nums[i]]);
  }
  let result = [];
  for (let [key, value] of map.entries()) {
    var left = 0;
    var right = nums.length - 1;
    while (left < right) {
      var sum = nums[left] + nums[right];
      if (sum === key && value[0] !== right && value[0] !== left) {
        const sortedElement = [value[1], nums[left], nums[right]].sort(
          (a, b) => a - b
        );
        result.push(sortedElement);
        left++;
      } else if (sum < key) left++;
      else right--;
    }
  }
  return removeDuplicates(result);
};
threeSum([-1, 0, 1, 2, -1, -4]); // [[-1,-1,2],[-1,0,1]]

function threeSum2(nums, target) {
  let start = 0; // con trỏ bắt đầu
  let currentSum = 0; // tổng hiện tại

  for (let end = 0; end < nums.length; end++) {
    // Cộng phần tử tại vị trí 'end' vào tổng
    currentSum += nums[end];

    // Nếu tổng vượt quá target, loại bỏ phần tử tại 'start' và dịch con trỏ 'start'
    while (currentSum > target && start <= end) {
      currentSum -= nums[start];
      start++;
    }

    // Nếu tổng bằng target, trả về subarray hoặc vị trí
    if (currentSum === target) {
      return nums.slice(start, end + 1); // trả về subarray
    }
  }

  // Không tìm thấy subarray
  return [];
}

console.log("threesum2", threeSum2([-1, 0, 1, 2, -1, -4], 0)); // [[-1,-1,2],[-1,0,1]]
