function getDaysInMonth(month, year) {
    // Use a Date object for reliable month handling
    return new Date(year, month, 0).getDate();
  }
  
  console.log(getDaysInMonth(1, 2012)); // Output: 31
  console.log(getDaysInMonth(2, 2012)); // Output: 29 (leap year check not required here)
  console.log(getDaysInMonth(9, 2012)); // Output: 30
  console.log(getDaysInMonth(12, 2012)); // Output: 31