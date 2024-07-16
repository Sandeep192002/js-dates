function diffMonths(date1, date2) {
    if (!(date1 instanceof Date) || !(date2 instanceof Date)) {
      throw new Error("Input must be Date objects.");
    }
  
    const year1 = date1.getFullYear();
    const month1 = date1.getMonth();
    const day1 = date1.getDate();
  
    const year2 = date2.getFullYear();
    const month2 = date2.getMonth();
    const day2 = date2.getDate();
  
    // Handle cases where the second date is earlier in the month than the first
    const months = (year2 - year1) * 12 + (month2 - month1);
    if (day2 < day1) {
      months--; // Adjust for incomplete month in the second date
    }
  
    return months;
  }
  
  // Example usage:
  const dt1 = new Date("June 13, 2014 08:11:00");
  const dt2 = new Date("October 19, 2014 11:13:00");
  console.log(diffMonths(dt1, dt2)); // Output: 4 (since July is an incomplete month)
  
  // Another example:
  const dt3 = new Date("October 13, 2014 08:11:00");
  const dt4 = new Date("December 19, 2014 11:13:00");
  console.log(diffMonths(dt3, dt4)); // Output: 2 (complete months)