function quarterOfTheYear(date) {
    if (!(date instanceof Date)) {
      throw new Error("Input must be a Date object.");
    }
  
    const month = date.getMonth(); // Months are 0-indexed
    return Math.floor(month / 3) + 1; // Quarters are 1-indexed
  }
  
  console.log(quarterOfTheYear(new Date(2015, 1, 21))); // Output: 2 (February)
  console.log(quarterOfTheYear(new Date(2015, 10, 18))); // Output: 4 (November)