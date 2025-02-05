const sumAll = function(num1, num2) {
    let n1 = num1;
    let n2 = num2;
    if (typeof num1 != "number" || typeof num2 != "number" ) {
        return 'ERROR';
    } else if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    } else if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return 'ERROR';
    } else if (num1 > num2) {
        n1 = num2;
        n2 = num1;
    }
    let finalSum = 0;
    for (i = n1; i <= n2; i++) {
        finalSum += i;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
