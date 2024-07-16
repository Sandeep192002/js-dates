function daysPassed(date) {
    if (!(date instanceof Date)) {
      throw new Error("Input must be a Date object.");
    }
  
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const diffInMs = date.getTime() - startOfYear.getTime();
    return Math.floor(diffInMs / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
  }
  
  console.log(daysPassed(new Date(2015, 0, 15))); // Output: 15
  console.log(daysPassed(new Date(2015, 11, 14))); // Output: 348