// https://leetcode.com/problems/roman-to-integer/description/
// 13. Roman to Integer

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// 95 = CXV = 100 - 10 + 5
// 995 = 900 90 5 = CM XC V
// 885 = 800 + 80 + 5 = DCCC LXXX V
// startWith 4,9 = 485 = 400 + 80 + 5 = DC LXXX V

var loopChar = function (char, loop) {
  let final = "";
  while (loop > 0) {
    final += char;
    loop--;
  }

  return final;
};
var intToRoman = function (num) {
  const dict = [
    {
      id: 0,
      code: "I",
      value: 1,
    },
    {
      id: 1,
      code: "V",
      value: 5,
    },
    {
      id: 2,
      code: "X",
      value: 10,
    },
    {
      id: 3,
      code: "L",
      value: 50,
    },
    {
      id: 4,
      code: "C",
      value: 100,
    },
    {
      id: 5,
      code: "D",
      value: 500,
    },
    {
      id: 6,
      code: "M",
      value: 1000,
    },
  ];
  let convertToString = num.toString();
  let roman = "";
  for (let i = 0; i < convertToString?.length; i++) {
    if (convertToString[i] === "4") {
      let firstLetter = dict?.find(
        (item) =>
          item?.value === 5 * Math.pow(10, convertToString?.length - 1 - i)
      )?.code;
      let secondLetter = dict?.find(
        (item) =>
          item?.value === 1 * Math.pow(10, convertToString?.length - 1 - i)
      )?.code;
      roman = roman + secondLetter + firstLetter;
    } else if (convertToString[i] === "9") {
      let firstLetter = dict?.find(
        (item) => item?.value === Math.pow(10, convertToString?.length - i)
      )?.code;
      let secondLetter = dict?.find(
        (item) => item?.value === Math.pow(10, convertToString?.length - 1 - i)
      )?.code;
      roman = roman + secondLetter + firstLetter;
    } else {
      let find =
        convertToString[i] * Math.pow(10, convertToString?.length - 1 - i);
      const filterDict = dict?.filter(
        (item) => String(item?.value).length === String(find)?.length
      );
      if (filterDict?.length === 2) {
        const numberOfChar1 = Math.floor(find / filterDict[1]?.value);
        const numberOfChar2 = Math.floor(
          (find - numberOfChar1 * filterDict[1]?.value) / filterDict[0]?.value
        );
        roman =
          roman +
          loopChar(filterDict[1]?.code, numberOfChar1) +
          loopChar(filterDict[0]?.code, numberOfChar2);
      } else {
        const numberOfChar1 = Math.floor(find / filterDict[0]?.value);
        roman = roman + loopChar(filterDict[0]?.code, numberOfChar1);
      }
    }
  }
  console.log(roman);
  return roman;
};

intToRoman(3749);
