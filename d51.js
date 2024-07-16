function getWeekEndDate(date) {
    if (!(date instanceof Date)) {
      throw new Error("Input must be a Date object.");
    }
  
    const weekStartDate = getWeekStartDate(date);
    const endDate = new Date(weekStartDate.getTime());
    endDate.setDate(endDate.getDate() + 6); // Add 6 days to get the Saturday of the week
    endDate.setHours(23, 59, 59, 999); // Set time to end of day (11:59 PM with milliseconds)
  
    return endDate;
  }
  
  // Example usage:
  const today = new Date();
  const weekEndDate = getWeekEndDate(today);
  console.log('This week ends on: ${weekEndDate}')