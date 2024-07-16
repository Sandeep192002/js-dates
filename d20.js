function shortDay(date) {
    if (!(date instanceof Date)) {
      throw new Error("Input must be a Date object.");
    }
  
    const day = date.toLocaleDateString("en-US", { weekday: 'short' });
    return day.toUpperCase(); // Ensure uppercase output (optional)
  }
  
  const dt = new Date(2015, 10, 1);
  console.log(shortDay(dt)); // Output: "SUN"