function timezoneOffsetInSeconds(date) {
    if (!(date instanceof Date)) {
      throw new Error("Input must be a Date object.");
    }
  
    const offset = date.getTimezoneOffset();
    return offset * 60; // Convert minutes to seconds
  }
  
  const dt = new Date();
  console.log(timezoneOffsetInSeconds(dt)); // Output: 19800 (example, depending on your location)