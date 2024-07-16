function numericMonth(date) {
    if (!(date instanceof Date)) {
      throw new Error("Input must be a Date object.");
    }
  
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    return month;
  }
  
  const dt = new Date(2015, 10, 1);
  console.log(numericMonth(dt)); // Output: "11"