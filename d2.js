function curday(separator = "-") {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = date.getFullYear();
  
    return ("${year}${separator}${month}${separator}${day");
  }
  
  console.log(curday('/'));  // Output: "2024/07/15"
  console.log(curday('-'));  // Output: "2024-07-15"