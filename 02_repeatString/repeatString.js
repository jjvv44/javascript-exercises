

const repeatString = function(string, num) {
    let st = ''; // Store the repeated string

    if (num < 0) {
        return ('ERROR')
    }

    for (let i = 1; i <= num; i++) {
        if (i === 1) {
            st = string;
        } else {
            st += string; // Append the string to itself
        }
    }

    return st;
};

// Do not edit below this line
module.exports = repeatString;
