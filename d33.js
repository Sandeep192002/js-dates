function hoursWithZeroes(date) {
    if (!(date instanceof Date)) {
      throw new Error("Input must be a Date object.");
    }
  
    const hours = date.getHours() % 12 || 12; // Handle 0 as 12
    return hours.toString().padStart(2, '0');
  }
  
  const dt = new Date(1989, 10, 1);
  console.log(hoursWithZeroes(dt)); // Output: "12"