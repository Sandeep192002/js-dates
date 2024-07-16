function dayOfMonth(date) {
    if (!(date instanceof Date)) {
      throw new Error("Input must be a Date object.");
    }
  
    const day = date.getDate().toString();
    return day.padStart(2, '0');
  }
  
  const d = new Date(2015, 10, 1);
  console.log(dayOfMonth(d)); // Output: "01"