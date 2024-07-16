function upperAMPM(date) {
    if (!(date instanceof Date)) {
      throw new Error("Input must be a Date object.");
    }
  
    const hours = date.getHours();
    return hours < 12 ? 'AM' : 'PM';
  }
  
  const dt = new Date('2024, 06, 15, 11, 30'); // 11:30 AM
  console.log(upperAMPM(dt)); // Output: "AM"