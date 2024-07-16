function diffWeeks(date1, date2) {
    if (!(date1 instanceof Date) || !(date2 instanceof Date)) {
      throw new Error("Input must be Date objects.");
    }
  
    const differenceInMilliseconds = date2.getTime() - date1.getTime();
    const differenceInWeeks = Math.round(differenceInMilliseconds / (1000 * 60 * 60 * 24 * 7));
    return differenceInWeeks;
  }
  
  // Example usage:
  const dt1 = new Date("June 13, 2014 08:11:00");
  const dt2 = new Date("October 19, 2014 11:13:00");
  console.log(diffWeeks(dt1, dt2)); // Output: 18