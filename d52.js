function getMonthStartDate(date) {
    if (!(date instanceof Date)) {
      throw new Error("Input must be a Date object.");
    }
  
    const startDate = new Date(date.getFullYear(), date.getMonth(), 1);
    startDate.setHours(0, 0, 0, 0); // Set time to midnight
  
    return startDate;
  }
  
  // Example usage:
  const today = new Date();
  const monthStartDate = getMonthStartDate(today);
  console.log('This month starts on: ${monthStartDate}');