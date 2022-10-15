const numCharArr = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };
   let res = [];
function recAction(str, index, phoneNum) {
  if (str.length == phoneNum.length) {
    res.push(str);
  } else {
    const chars = numCharArr[phoneNum[index]];
    for (let char of chars) {
      recAction(str + char, index + 1, phoneNum);
    }
  }
}

function numberPrint(phoneNum) {
  if (!phoneNum.length) return [];
 
  recAction('', 0, phoneNum);
  return res;
};

console.log(numberPrint("23"))