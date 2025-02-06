const fibonacci = function(seq) {
    if (seq < 0) {
        return "OOPS";
    }
    let fibList = [0, 1];
    for (i = 2; i <= seq; i++ ) {
        let num = fibList[i - 1] + fibList[i - 2];
        fibList.push(num);
    };
    return fibList[seq];
};

// console.log(fibonacci(4))

// Do not edit below this line
module.exports = fibonacci;
