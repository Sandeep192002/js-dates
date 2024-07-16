function fullMonth(date) {
    if (!(date instanceof Date)) {
      throw new Error("Input must be a Date object.");
    }
  
    const month = date.toLocaleDateString("en-US", { month: 'long' });
    return month;
  }
  
  const dt = new Date(2015, 10, 1);
  console.log(fullMonth(dt)); // Output: "November"