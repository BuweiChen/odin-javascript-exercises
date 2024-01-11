const repeatString = function(str, num) {
    let ans = "";
    if (num < 0) {
        return "ERROR";
    }
    for (let i = 0; i < num; i++) {
        ans += str;
    }
    return ans;
};

// Do not edit below this line
module.exports = repeatString;
