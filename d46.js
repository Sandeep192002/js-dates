function diffDays(date1, date2) {
    if (!(date1 instanceof Date) || !(date2 instanceof Date)) {
      throw new Error("Input must be Date objects.");
    }
  
    // Handle dates with different times to ensure consistent day calculation
    const adjustedDate1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate(), 0, 0, 0, 0); // Set time to midnight
    const adjustedDate2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate(), 0, 0, 0, 0); // Set time to midnight
  
    const differenceInMilliseconds = adjustedDate2.getTime() - adjustedDate1.getTime();
    const differenceInDays = Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24)); // Use Math.ceil for inclusive days
    return differenceInDays;
  }
  
  // Example usage:
  const dt1 = new Date("October 13, 2014 08:11:00");
  const dt2 = new Date("October 19, 2014 11:13:00");
  console.log(diffDays(dt1, dt2)); // Output: 6