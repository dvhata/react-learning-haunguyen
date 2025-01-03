// 76. Minimum Window Substring
//https://leetcode.com/problems/minimum-window-substring/description/

// ### **Bài toán: Tìm chuỗi con ngắn nhất chứa tất cả các ký tự của chuỗi `t` trong chuỗi `s`.**

// **Input:**
// `s = "ADOBECODEBANC"`, `t = "ABC"`
// **Output:**
// `"BANC"`

function minWindowThao(s, t) {
  var initK = t.length;
  var output = "";
  while (output === "") {
    var window = "";
    var map = new Map();
    for (var i = 0; i < initK; i++) {
      map.set(t[i], map.get(s[i]) + 1 || 1);
      window += s[i];
      map.set(s[i], map.get(s[i]) + 1 || 1);
    }
    if (map.get("A") >= 2 && map.get("B") >= 2 && map.get("C") >= 2) {
      output = window;
    } else {
      for (var i = initK; i < s.length; i++) {
        window += s[i];
        window = window.substring(1, window.length);
        if (map.get(s[i - initK]))
          map.set(s[i - initK], map.get(s[i - initK]) - 1);
        map.set(s[i], map.get(s[i]) + 1 || 1);
        if (map.get("A") >= 2 && map.get("B") >= 2 && map.get("C") >= 2) {
          output = window;
        }
      }
    }
    initK++;
  }
  return output;
}

// console.log(minWindowThao("ADOBECODEBANC", "ABC")); // Output: "BANC"

function minWindow(s, t) {
  var targetMap = new Map();
  for (var i = 0; i < t.length; i++) {
    targetMap.set(t[i], (targetMap.get(t[i]) || 0) + 1);
  }
  var validCount = 0;
  var left = 0;
  var right = 0;
  var minLength = 0;
  var windowMap = new Map();
  for (var i = 0; i < s.length; i++) {
    windowMap.set(t[i], (windowMap.get(t[i]) || 0) + 1);
    if (targetMap.get(s[i]) === windowMap.get(s[i])) {
      validCount++;
    }

    if (validCount === targetMap.size()) {
      minLength = right - left;
      windowMap.set(s[left], windowMap.get(s[left]) - 1);
      left++;
    }
    right++;
  }
}

console.log(minWindow("ADOBECODEBANC", "ABC")); // Output: "BANC"
