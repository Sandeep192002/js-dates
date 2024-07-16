function diffYears(date1, date2) {
    if (!(date1 instanceof Date) || !(date2 instanceof Date)) {
      throw new Error("Input must be Date objects.");
    }
  
    const year1 = date1.getFullYear();
    const year2 = date2.getFullYear();
  
    // Handle cases where the second date is earlier in the year than the first
    let years = year2 - year1;
    if (date2.getMonth() < date1.getMonth() ||
        (date2.getMonth() === date1.getMonth() && date2.getDate() < date1.getDate())) {
      years--; // Adjust for incomplete year in the second date
    }
  
    return years;
  }
  
  // Example usage:
  const dt1 = new Date("June 13, 2014 08:11:00");
  const dt2 = new Date("October 19, 2017 11:13:00");
  console.log(diffYears(dt1, dt2)); // Output: 3 (since 2014 is not a complete year)
  
  // Another example:
  const dt3 = new Date("December 31, 2013 08:11:00"); // End of 2013 (non-leap year)
  const dt4 = new Date("January 1, 2016 11:13:00"); // Start of 2016 (leap year)
  console.log(diffYears(dt3, dt4)); // Output: 2 (considering leap year