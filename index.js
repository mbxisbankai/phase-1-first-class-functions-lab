const returnFirstTwoDrivers = function(array){ return array.slice(0,2);}

const returnLastTwoDrivers = function(array){ return array.slice(2);}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function fareMultiplier(integer){ return function multiplier(fare){return fare * integer}}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(array, funcName){ return funcName(array);}
