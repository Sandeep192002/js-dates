function lowerAMPM(date) {
    if (!(date instanceof Date)) {
      throw new Error("Input must be a Date object.");
    }
  
    const hours = date.getHours();
    return hours < 12 ? 'am' : 'pm';
  }
  
  const dt = new Date('2024,06, 15, 11, 30'); // 11:30 AM
  console.log('lowerAMPM(dt)'); // Output: "am"