// 14. Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

var longestCommonPrefix = function (strs) {
  let index = 0;
  let output = "";
  while (index < strs[0].length) {
    let commonPrefix = strs[0]?.charAt(index);
    let isCommon = true;
    for (const word of strs) {
      console.log(word?.charAt(index));
      if (commonPrefix !== word?.charAt(index)) {
        isCommon = false;
      }
      console.log("isCommon: " + isCommon);
    }
    if (isCommon) output += commonPrefix;
    else break;
    index++;
  }
  console.log("output", output);
  return output;
};

strs = ["cir", "car"];
longestCommonPrefix(strs);

// ---------------------------------------------------------------------------------------------------------------

var longestCommonPrefix2 = function (strs) {
  if (!strs.length) return ""; // Return early if the array is empty
  let output = "";

  // Use the first string as a reference for comparison
  const firstStr = strs[0];

  for (let index = 0; index < firstStr.length; index++) {
    const char = firstStr.charAt(index);

    // Check if this character is present in all strings
    for (let i = 1; i < strs.length; i++) {
      if (strs[i].charAt(index) !== char) {
        return output; // Return the output if a mismatch is found
      }
    }

    output += char; // Append the common character to output
  }

  return output; // Return the final common prefix
};

strs = ["cir", "car"];
console.log(longestCommonPrefix2(strs)); // Output: "c"

// ---------------------------------------------------------------------------------------------------------------

var longestCommonPrefix3 = function (strs) {
  // Use reduce to iterate over the array of strings
  return strs.reduce((acc, cv) => {
    // Loop through the characters of the current string (cv)
    for (let i = 0; i < cv.length; i++) {
      // Corrected loop condition
      // Check if the current character of cv does not match the corresponding character in acc
      if (cv[i] !== acc[i]) {
        // If they don't match, return the substring of acc from the start to the current index (i)
        return acc.substring(0, i);
      }
      // If acc is equal to the current string cv, return acc as it is a common prefix
      if (acc === cv) {
        return acc;
      }
    }
    // If no common prefix is found, return an empty string
    return "";
  });
};

// Example usage
strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix3(strs)); // Output: "fl"

strs = ["cir", "car"];
console.log(longestCommonPrefix3(strs)); // Output: "c"
