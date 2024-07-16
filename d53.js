function getMonthEndDate(date) {
    if (!(date instanceof Date)) {
      throw new Error("Input must be a Date object.");
    }
  
    const year = date.getFullYear();
    const month = date.getMonth();
  
    // Create a new Date object for the next month, set to the first day
    const nextMonth = new Date(year, month + 1, 1);
    // Subtract one day to get the last day of the current month
    const endDate = new Date(nextMonth.getTime() - 1);
    endDate.setHours(23, 59, 59, 999); // Set time to end of day (11:59 PM with milliseconds)
  
    return endDate;
  }
  
  // Example usage:
  const today = new Date();
  const monthEndDate = getMonthEndDate(today);
  console.log('This month ends on: ${monthEndDate}');
  