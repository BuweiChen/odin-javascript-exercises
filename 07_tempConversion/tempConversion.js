const convertToCelsius = function(degreesInF) {
  return Math.round((degreesInF - 32) * 5 / 9 * 10) / 10;
};

const convertToFahrenheit = function(degreesInC) {
  return Math.round((degreesInC / 5 * 9 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
