const palindromes = function (str) {
    const letters_and_numbers = [...str.toLowerCase()].filter(char => /^[a-z0-9]$/.test(char));
    return letters_and_numbers.join() == letters_and_numbers.reverse().join();
};

// Do not edit below this line
module.exports = palindromes;
