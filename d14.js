function daysInYear(year) {
    if (isNaN(year)) {
      throw new Error("Input must be a number representing the year.");
    }
  
    // Use the Date object's built-in leap year check
    return new Date(year, 1, 29).getDate() === 1 ? 366 : 365;
  }
  
  console.log(daysInYear(2015)); // Output: 365
  console.log(daysInYear(2016)); // Output: 366