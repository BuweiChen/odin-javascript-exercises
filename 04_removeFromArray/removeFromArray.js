const removeFromArray = function(arr) {
    let toRemoveArr = Array.prototype.slice.call(arguments, 1);
    for (let i = 0; i < toRemoveArr.length; i++) {
        if (arr.includes(toRemoveArr[i])) {
            arr.splice(arr.indexOf(toRemoveArr[i]), 1);
            i--;
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
