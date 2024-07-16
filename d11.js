function maxDate(dates) {
    if (!Array.isArray(dates)) {
      throw new Error("Input must be an array.");
    }
  
    const validDates = dates.filter(dateStr => new Date(dateStr) instanceof Date);
  
    if (validDates.length === 0) {
      throw new Error("No valid Date objects found in the array.");
    }
  
    }
    return Math.max(...validDates);