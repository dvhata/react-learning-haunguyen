// 347. Top K Frequent Elements
// https://leetcode.com/problems/top-k-frequent-elements/description/

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

var topKFrequent = function (nums, k) {
  let map = new Map();
  let length = nums.length;
  for (let i = 0; i < length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }
  console.log(map);
  console.log(map.entries());
  // tương lai tìm cách tối ưu ở sortedArrays này
  const sortedArray = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
  console.log(sortedArray);
  console.log(sortedArray.splice(0, k).map((item) => item[0]));
  return sortedArray.splice(0, k).map((item) => item[0]);
};

topKFrequent([1, 1, 1, 2, 2, 3, 4, 5], 2);
topKFrequent([-1, -1], 1);
