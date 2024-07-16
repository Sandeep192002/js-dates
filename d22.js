function ISONumericDayOfWeek(date) {
    if (!(date instanceof Date)) {
      throw new Error("Input must be a Date object.");
    }
  
    const day = date.getDay() || 7; // Handle Sunday as 7 (ISO standard)
    return day;
  }
  
  const dt = new Date(2015, 10, 1);
  console.log(ISONumericDayOfWeek(dt)); // Output: 7 (Sunday)