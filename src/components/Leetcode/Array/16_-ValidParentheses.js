// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/

// '(', ')', '{', '}', '[' , ']'

// RULE: Open brackets must be closed in the correct order.

// Example 1:

// Input: s = "()"

// Output: true

// Input: s = "(]"

// Output: false

var isValid = function (s) {
  var length = s.length;
  var output = true;
  var count = 0;
  while (count < length) {
    console.log(count);
    if (
      (s[count] === "{" && s[length - count - 1] === "}") ||
      (s[count] === "}" && s[length - count - 1] === "{") ||
      (s[count] === "[" && s[length - count - 1] === "]") ||
      (s[count] === "]" && s[length - count - 1] === "[") ||
      (s[count] === "(" && s[length - count - 1] === ")") ||
      (s[count] === ")" && s[length - count - 1] === "(")
    ) {
      console.log("yes");
      count = count + 1;
    } else if (
      (s[count] === "{" && s[count + 1] === "}") ||
      (s[count] === "[" && s[count + 1] === "]") ||
      (s[count] === "(" && s[count + 1] === ")")
    ) {
      console.log("yes2");
      count = count + 2;
    } else {
      count = length;
      output = false;
    }
  }
  return output;
};

// console.log(isValid("()[]{}")); //true
// console.log(isValid("({{{{}}}))")); //false
// console.log(isValid("([])")); // true
// console.log(isValid("(){}}{")); // false
console.log(isValid("(}{)")); // false
