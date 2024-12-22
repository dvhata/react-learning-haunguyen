// 383. Ransom Note
// https://leetcode.com/problems/ransom-note/description/?envType=study-plan-v2&envId=top-interview-150

// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.

// Example 2:
// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:
// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// Sử dụng HashMap để đếm tần suất ký tự trong magazine, sau đó kiểm tra tần suất từng ký tự trong ransomNote.
// Nếu tất cả ký tự trong ransomNote có đủ tần suất trong magazine, trả về true, ngược lại trả về false.

// ----------------------------------------------------------------
// SOLUTION:
// Nếu ransomNote letter không có trong charCount -> false
// Nếu ransomNote letter có trong charCount -> charCount.get(letter) - 1
// Nếu số lần xuất hiện của letter ransomNote < 0 -> FALSE

var canConstruct = function (ransomNote, magazine) {
  var charCount = new Map();
  var magazineLength = magazine.length;
  for (var i = 0; i < magazineLength; i++) {
    var letter = magazine[i];
    charCount.set(letter, (charCount.get(letter) || 0) + 1);
  }
  var ransomNoteLength = ransomNote.length;
  for (var i = 0; i < ransomNoteLength; i++) {
    var letter = ransomNote[i];
    if (!charCount.has(letter)) {
      return false;
    } else {
      charCount.set(letter, charCount.get(letter) - 1);
      if (charCount.get(letter) < 0) {
        return false;
      }
    }
  }
  return true;
};

console.log(canConstruct("aa", "aab")); //true
console.log(canConstruct("aab", "baa")); //true
console.log(canConstruct("aa", "ab")); //false

var canConstruct2 = function (ransomNote, magazine) {
  var magaHash = {};

  for (var c in magazine) {
    magaHash[c] = (magaHash[c] || 0) + 1;
  }

  for (var c in ransomNote) {
    if (!magaHash[c] || magaHash[c] <= 0) {
      return false;
    }
    magaHash[c]--;
  }

  return true;
};
