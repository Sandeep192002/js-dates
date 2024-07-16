function differenceToGMT(date) {
    if (!(date instanceof Date)) {
      throw new Error("Input must be a Date object.");
    }
  
    const offset = date.getTimezoneOffset();
    const hours = Math.abs(offset / 60);
    const minutes = Math.abs(offset % 60);
    const sign = offset < 0 ? "-" : "+";
  
  }
  
  const dt = new Date();
  console.log(differenceToGMT(dt)); // Output: "+05.50" (example, depending on your location)