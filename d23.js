function englishOrdinalSuffix(date) {
    if (!(date instanceof Date)) {
      throw new Error("Input must be a Date object.");
    }
  
    const day = date.getDate();
    const suffixes = ['st', 'nd', 'rd', 'th'];
  
    const remainder = day % 100;
  
    return (remainder - 10 < 0 || remainder > 20)
      ? suffixes[day % 10] || 'th' // Handle 11th, 12th, 13th, etc.
      : suffixes[remainder % 10];
  }
  
  const dt = new Date(2015, 10, 1);
  console.log(englishOrdinalSuffix(dt)); // Output