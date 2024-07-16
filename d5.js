function compareDates(date1, date2) {
    if (!(date1 instanceof Date) || !(date2 instanceof Date)) {
      throw new Error("Input must be Date objects.");
    }
  
    const comparison = date1.getTime() - date2.getTime();
  
    if (comparison === 0) {
      return "Date1 = Date2";
    } else if (comparison > 0) {
      return "Date1 > Date2";
    } else {
      return "Date2 > Date1";
    }
  }
  
  console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00'))); // Output: "Date1 = Date2"
  console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00'))); // Output: "Date1 > Date2"
  console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01'))); // Output: "Date2 > Date1"