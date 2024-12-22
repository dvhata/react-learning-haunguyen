// 88. Merge Sorted Array
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n,
// where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

// Link: https://leetcode.com/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150

var merge = function (nums1, m, nums2, n) {
  if (m == 0) {
    nums2?.forEach((item, index) => {
      nums1[index] = item;
    });
    return;
  } else
    nums1?.forEach((item1, index1) => {
      let newItem;
      m--;
      console.log(m);
      if (m < 0) {
        console.log(index1 - n);
        newItem = nums2[index1 - n];
      } else newItem = item1;
      if (index1 > 0) {
        if (newItem > nums1[index1 - 1]) {
          nums1[index1] = newItem;
        } else {
          nums1[index1] = nums1[index1 - 1];
          nums1[index1 - 1] = newItem;
        }
      }
    });
};
nums1 = [1, 3, 5, 7, 0, 0];
m = 4;
nums2 = [2, 3];
n = 2;
merge(nums1, m, nums2, n);
console.log("finally merge", nums1);
