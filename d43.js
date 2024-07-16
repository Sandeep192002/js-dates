function addMonths(date, months) {
    if (!(date instanceof Date)) {
      throw new Error("Input must be a Date object.");
    }
  
    const copy = new Date(date.getTime());
    copy.setMonth(copy.getMonth() + months);
    return copy;
  }
  
  const dt = new Date(2014, 10, 2);
  console.log(addMonths(dt, 10).toString()); // Output: "Wed Sep 02 2015 00:00:00 GMT+0530 (India Standard Time)"