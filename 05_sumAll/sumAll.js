const sumAll = function(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number" || num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    let smaller = num1 > num2 ? num2 : num1;
    let bigger = num1 > num2 ? num1 : num2;
    let sum = 0;
    for (; smaller <= bigger; smaller++) {
        sum += smaller;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
