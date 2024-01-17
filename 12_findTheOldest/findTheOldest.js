const findTheOldest = function(people) {
    return people
        .map(person => {
            let yearD, yearB;
            if (!person["yearOfDeath"]) {
                yearD = (new Date()).getFullYear();
            } else {
                yearD = person["yearOfDeath"];
            }
            yearB = person["yearOfBirth"];
            return {name: person["name"], age: yearD - yearB};
        })
        .reduce((oldest, curr) => {
            if (!oldest["name"]) {
                return curr;
            }
            return oldest.age > curr.age ? oldest : curr;
        }, {});
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ];

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
