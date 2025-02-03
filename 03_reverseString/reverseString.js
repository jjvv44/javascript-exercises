const reverseString = function(string) {
    let st = ''
    for (i = string.length - 1; i >= 0; i--) {
        st += string[i];
    }
    return st;
};

// Do not edit below this line
module.exports = reverseString;
