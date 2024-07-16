function isDaylightSavingTime(date) {
    if (!(date instanceof Date)) {
      throw new Error("Input must be a Date object.");
    }
  
    const utcDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
    const stdTimezone = new Date(utcDate.getFullYear(), 0, 1, utcDate.getUTCHours(), utcDate.getUTCMinutes(), utcDate.getUTCSeconds(), 0);
    const dstTimezone = new Date(utcDate.getFullYear(), 6, 1, utcDate.getUTCHours(), utcDate.getUTCMinutes(), utcDate.getUTCSeconds(), 0);
    const stdOffset = stdTimezone.getTimezoneOffset();
    const dstOffset = dstTimezone.getTimezoneOffset();
  
    return stdOffset < dstOffset; // DST in effect if standard offset is less than DST offset
  }
  
  const dt = new Date();
  console.log(isDaylightSavingTime(dt)); // Output: 1 (true) or 0 (false) depending on your current time and location