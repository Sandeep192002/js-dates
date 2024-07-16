function addWeeks(date, weeks) {
    if (!(date instanceof Date)) {
      throw new Error("Input must be a Date object.");
    }
  
    const copy = new Date(date.getTime());
    copy.setDate(copy.getDate() + weeks * 7);
    return copy;
  }
  
  const dt = new Date(2014, 10, 2);
  console.log(addWeeks(dt, 10).toString()); // Output: "Sun Jan 11 2015 00:00:00 GMT+0530 (India Standard Time)"