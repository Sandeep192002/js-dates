function twoDigitYear(date) {
    if (!(date instanceof Date)) {
      throw new Error("Input must be a Date object.");
    }
  
    const year = date.getFullYear().toString().slice(-2);
    return year;
  }
  
  const dt = new Date(1989, 10, 1);
  console.log(twoDigitYear(dt)); // Output: "89