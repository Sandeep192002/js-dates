function timeDifferenceInSeconds(date1, date2) {
    if (!(date1 instanceof Date) || !(date2 instanceof Date)) {
      throw new Error("Input must be Date objects.");
    }
  
    const differenceInMilliseconds = date2.getTime() - date1.getTime();
    const differenceInSeconds = Math.round(differenceInMilliseconds / 1000);
    return differenceInSeconds;
  }
  
  // Example usage:
  const dt1 = new Date("October 13, 2014 11:11:00"); // October 13, 2014, 11:11 AM
  const dt2 = new Date(); // Current date and time
  
  const differenceInSeconds = timeDifferenceInSeconds(dt1, dt2);
  console.log('The time difference is ${differenceInSeconds} seconds.');