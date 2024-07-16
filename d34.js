function hoursWithoutZeroes(date) {
    if (!(date instanceof Date)) {
      throw new Error("Input must be a Date object.");
    }
  
    const hours = date.getHours();
    return hours.toString(); // No padding
  }
  
  const dt = new Date(1989, 10, 1);
  console.log(hoursWithoutZeroes(dt)); // Output: "0