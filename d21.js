function longDay(date) {
    if (!(date instanceof Date)) {
      throw new Error("Input must be a Date object.");
    }
  
    const day = date.toLocaleDateString("en-US", { weekday: 'long' });
    return day;
  }
  
  const dt = new Date(2015, 10, 1);
  console.log(longDay(dt)); // Output: "Sunday"