function longestPalindrome(str) {
    if (str === "") return "No palindrome found.";
    let arr = [];
    let strArr = str.split("");
    for (let i = 0; i < strArr.length; i++) {
        for (let j = 0; j < strArr.length; j++) {
            let word = strArr.slice(0, j + 1).join("");
            let buff = strArr
                .slice(0, j + 1)
                .reverse()
                .join("");
            if (word === buff) {
                arr.push(word);
            }
        }
        strArr.splice(0, 1);
    }
    let bufferArr = arr.sort((a, b) => a.length - b.length);
    for (let i = 0; i < bufferArr.length; i++) {
        if (bufferArr[arr.length - 1].length === bufferArr[i].length) {
            return `${bufferArr[i]} - ${bufferArr[i].length}`;
        }
    }
}

console.log(longestPalindrome("sendsabcbasoon "))