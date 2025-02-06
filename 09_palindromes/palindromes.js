const palindromes = function (str) {
    let cleanedStr = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'"]/g, "");
    cleanedStr = cleanedStr.split(" ").join("");
    cleanedStr = cleanedStr.toLowerCase(); //lower case
    let reversedStr = '';
    for (i = cleanedStr.length - 1; i >= 0; i--) {
        reversedStr += cleanedStr[i];
    };

    return cleanedStr === reversedStr;
    
    // if (cleanedStr === reversedStr) {
    //     return true;
    // } else {
    //     return false;
    // }
};

palindromes("hello, World!, I!")
// Do not edit below this line
module.exports = palindromes;
