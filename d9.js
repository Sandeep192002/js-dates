function lastDay(year, month) {
    // Create a Date object for the first day of the next month
    return new Date(year, month + 1, 0).getDate();
  }
  
  console.log(lastDay(2014, 0));  // Output: 31 (January)
  console.log(lastDay(2014, 1));  // Output: 28 (February, non-leap year)
  console.log(lastDay(2014, 11)); // Output: 30 (December