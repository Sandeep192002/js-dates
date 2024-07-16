function addYears(date, years) {
    if (!(date instanceof Date)) {
      throw new Error("Input must be a Date object.");
    }
  
    const copy = new Date(date.getTime()); // Create a copy to avoid modifying original
    copy.setFullYear(copy.getFullYear() + years);
    return copy;
  }
  
  const dt = new Date(2014, 10, 2);
  console.log(addYears(dt, 10).toString()); // Output: "Sat Nov 02 2024 00:00:00 GMT+0530 (India Standard Time)"