function isWeekend(date) {
    if (!(date instanceof Date)) {
      throw new Error("Input must be a Date object.");
    }
  
    const day = date.getDay();
    return day === 0 || day === 6; // Sunday (0) or Saturday (6) are weekends
  }
  
  console.log(is_weekend('Nov 15, 2014')); // Output: "weekend" (Saturday)
  console.log(is_weekend('Nov 16, 2014')); // Output: "weekend" (Sunday)
  console.log(is_weekend('Nov 17, 2014')); // Output: false (Monday)