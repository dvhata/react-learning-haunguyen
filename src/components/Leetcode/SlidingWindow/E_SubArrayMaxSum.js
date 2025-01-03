// ### **Bài toán: Tìm tổng lớn nhất của một subarray liên tiếp có kích thước `k`.**

// **Input:**

// `nums = [2, 3, 4, 1, 5]`, `k = 3`

// **Output:**

// `9` (Tổng của subarray `[4,1,5]` là lớn nhất).

function maxSumSubarray(nums, k) {
  var maxSum = 0;
  var windowSum = 0;
  for (var i = 0; i < k; i++) {
    windowSum += nums[i];
  }

  // windowSum += nums[end] - nums[start]
  for (var i = k; i < nums.length; i++) {
    windowSum = windowSum - nums[i - k] + nums[i];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}

console.log(maxSumSubarray([2, 3, 4, 1, 5], 3)); // 10
