function secondsWithLeadingZeros(date) {
    if (!(date instanceof Date)) {
      throw new Error("Input must be a Date object.");
    }
  
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return seconds;
  }
  
  const dt = new Date(1989, 10, 1);
  console.log(secondsWithLeadingZeros(dt)); // Output: "00