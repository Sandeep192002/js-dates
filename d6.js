function addMinutes(date, minutes) {
    if (!(date instanceof Date)) {
      throw new Error("Input must be a Date object.");
    }
  
    const newDate = new Date(date.getTime()); // Create a copy to avoid modifying the original
    newDate.setMinutes(newDate.getMinutes() + minutes);
    return newDate;
  }
  
  console.log(addMinutes(new Date(2014, 10, 2), 30).toString()); // Output: "Sun Nov 02 2014 00:30:00 GMT-0400 (Eastern Standard Time)"