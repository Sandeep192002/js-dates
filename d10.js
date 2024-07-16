function yesterday(date) {
    if (!(date instanceof Date)) {
      throw new Error("Input must be a Date object.");
    }
  
    const yesterday = new Date(date.getTime());
    yesterday.setDate(yesterday.getDate() - 1);
    return yesterday;
  }
  
  console.log(yesterday(new Date('Nov 15, 2014'))); // Output: (date object for Nov 14, 2014)
  console.log(yesterday(new Date('Nov 16, 2015'))); // Output: (date object for Nov 15, 2015)
  console.log(yesterday(new Date('Nov 17, 2016'))); // Output: (date object for Nov 16, 2016)