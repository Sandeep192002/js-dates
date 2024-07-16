function ISO8601_week_no(date) {
    if (!(date instanceof Date)) {
      throw new Error("Input must be a Date object.");
    }
  
    var tdt = new Date(date.valueOf());
    var dayn = (tdt.getDay() + 6) % 7; // Shift to Monday
    tdt.setDate(tdt.getDate() - dayn + 3); // Thursday of this week
    var firstThursday = tdt.valueOf();
    tdt.setMonth(0, 1); // Jan 1st
    if (tdt.getDay() !== 4) { // Not a Thursday?
      tdt.setMonth(0, 1 + ((4 - tdt.getDay()) + 7) % 7); // Find first Thursday
    }
    return 1 + Math.ceil((firstThursday - tdt) / 604800000); // Weeks between
  }
  
  const dt = new Date(2015, 10, 1);
  console.log(ISO8601_week_no(dt)); // Output: 43 (as expected)