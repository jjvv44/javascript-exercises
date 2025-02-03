const removeFromArray = function(array, ...remove) {
    for (i = array.length - 1; i >= 0; i--) {
        if (remove.includes(array[i])) {
            array.splice(i,1)
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
