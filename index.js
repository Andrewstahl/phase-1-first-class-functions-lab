// Code your solution in this file!
// Returns the first two drivers in an array
const returnFirstTwoDrivers = function (arr) {return arr.slice(0, 2)};
// Returns the last two drivers in an array
const returnLastTwoDrivers = function (arr) {return arr.slice(-2)};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
  return function (fare) {return fare * num};
}

const fareDoubler = function (fare) {return createFareMultiplier(2)(fare)};
const fareTripler = function (fare) {return createFareMultiplier(3)(fare)};

function selectDifferentDrivers(arrDrivers, secondaryFunction) {
  if (secondaryFunction === returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(arrDrivers);
  } else if (secondaryFunction === returnLastTwoDrivers) {
    return returnLastTwoDrivers(arrDrivers);
  }
}

// console.log(returnFirstTwoDrivers ([1, 2, 3, 4]));