function minDate(dates) {
    if (!Array.isArray(dates)) {
      throw new Error("Input must be an array.");
    }
  
    const validDates = dates.filter(dateStr => new Date(dateStr) instanceof Date);
  
    if (validDates.length === 0) {
      throw new Error("No valid Date objects found in the array.");
    }
  
    return Math.min(...validDates); // Use spread operator
  }
  
  console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03'])); // Output: "2015/01/03"