function isDate(input) {
    return input instanceof Date && !isNaN(input.getTime());
  }
  
  console.log(isDate("October 13, 2014 11:13:00")); // false
  console.log(isDate(new Date(86400000)));        // true
  console.log(isDate(new Date(99, 5, 24, 11, 33, 30, 0))); // true
  console.log(isDate([1, 2, 4, 0]));               // false
