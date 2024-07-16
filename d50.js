function getWeekStartDate(date) {
    if (!(date instanceof Date)) {
      throw new Error("Input must be a Date object.");
    }
  
    const day = date.getDay(); // 0 (Sunday) to 6 (Saturday)
    const diff = day === 0 ? 6 : day - 1; // Calculate the number of days to subtract from the current date
  
    const startDate = new Date(date.getTime());
    startDate.setDate(startDate.getDate() - diff);
    startDate.setHours(0, 0, 0, 0); // Set time to midnight
  
    return startDate;
  }
  
  // Example usage:
  const today = new Date();
  const weekStartDate = getWeekStartDate(today);
  console.log('This week starts on: ${weekStartDate}');