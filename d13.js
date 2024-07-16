function timeConvert(minutes) {
    if (isNaN(minutes) || minutes < 0) {
      throw new Error("Input must be a non-negative number of minutes.");
    }
  
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return '${minutes} minutes = ${hours} hour(s) and ${remainingMinutes} minute(s).';
  }
  
  console.log(timeConvert(200)); // Output: "200 minutes = 3 hour(s) and 20 minute(s)."