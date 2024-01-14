// Code your solution in this file!
// returnFirstTwoDrivers returns the first two drivers in the array
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
  };
  
  // returnLastTwoDrivers returns the last two drivers in the array
  const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
  };
  
  // selectingDrivers is an array containing the two functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // createFareMultiplier is a higher-order function that returns a function to multiply fares
  const createFareMultiplier = function (multiplier) {
    return function (fare) {
      return fare * multiplier;
    };
  };
  
  // fareDoubler doubles the fare using createFareMultiplier
  const fareDoubler = createFareMultiplier(2);
  
  // fareTripler triples the fare using createFareMultiplier
  const fareTripler = createFareMultiplier(3);
  
  // selectDifferentDrivers selects drivers based on the provided function
  const selectDifferentDrivers = function (drivers, selectingFunction) {
    return selectingFunction(drivers);
  };
  
  // Exporting the functions
  module.exports = {
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    selectingDrivers,
    createFareMultiplier,
    fareDoubler,
    fareTripler,
    selectDifferentDrivers
  };
  