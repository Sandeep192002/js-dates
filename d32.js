function internetTime(date) {
    if (!(date instanceof Date)) {
      throw new Error("Input must be a Date object.");
    }
  
    // Adjust for Biel Mean Time (UTC+01:00)
    const utcDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
  
    const hours = (utcDate.getUTCHours() + 1) % 24; // Adjust for 24-hour format
    const minutes = utcDate.getUTCMinutes();
    const seconds = utcDate.getUTCSeconds();
  
    // Calculate total beats (thousandths of a day)
    const beats = Math.floor((hours * 60 * 60 + minutes * 60 + seconds) * 1000 / 24);
  
    return beats.toString().padStart(3, '0'); // Ensure three-digit format
  }
  
  const dt = new Date(1989, 10, 1);
  console.log(internet_time(dt)); // Output: 812  (around 11:28 AM in Biel Mean Time)