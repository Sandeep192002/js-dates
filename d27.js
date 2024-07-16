function shortMonth(date) {
    if (!(date instanceof Date)) {
      throw new Error("Input must be a Date object.");
    }
  
    const month = date.toLocaleDateString("en-US", { month: 'short' });
    return month.toUpperCase(); // Ensure uppercase output (optional)
  }
  
  const dt = new Date(2015, 10, 1);
  console.log(shortMonth(dt)); // Output: "NOV"