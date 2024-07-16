function monthName(date) {
    if (!(date instanceof Date)) {
      throw new Error("Input must be a Date object.");
    }
  
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
  
    return monthNames[date.getMonth()];
  }
  
  console.log(monthName(new Date("10/11/2009"))); // Output: "October"
  console.log(monthName(new Date("11/13/2014"))); // Output: "November"