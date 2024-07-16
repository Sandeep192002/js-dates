function unixTimeToHumanReadable(unixTimestamp) {
    if (isNaN(unixTimestamp)) {
      throw new Error("Input must be a valid Unix timestamp (number).");
    }
  
    const date = new Date(unixTimestamp * 1000); // Convert from seconds to milliseconds
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return '${hours}:${minutes}:${seconds}';
  }
  
  console.log(unixTimeToHumanReadable(1484220800)); // Output: "10:00:00" (example timestamp)