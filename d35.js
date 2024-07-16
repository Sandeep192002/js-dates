function minutesWithLeadingZeros(date) {
    if (!(date instanceof Date)) {
      throw new Error("Input must be a Date object.");
    }
  
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return minutes;
  }
  
  const dt = new Date(1989, 10, 1);
  console.log(minutesWithLeadingZeros(dt)); // Output: "00"