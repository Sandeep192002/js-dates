function dateDiffInDays(date1, date2) {
    if (!(date1 instanceof Date) || !(date2 instanceof Date)) {
      throw new Error("Input must be Date objects.");
    }
  
    const diffInMs = date1.getTime() - date2.getTime();
    return Math.floor(diffInMs / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
  }
  
  console.log(dateDiffInDays(new Date('04/02/2014'), new Date('11/04/2014'))); // Output: 216
  console.log(dateDiffInDays(new Date('12/02/2014'), new Date('11/04/2014'))); // Output: -28