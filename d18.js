function calculateAge(birthDate) {
    if (!(birthDate instanceof Date)) {
      throw new Error("Input must be a Date object representing the birth date.");
    }
  
    const today = new Date();
    const birthYear = birthDate.getFullYear();
    const currentYear = today.getFullYear();
  
    let age = currentYear - birthYear;
  
    // Check if birthday hasn't happened this year yet
    if (today.getMonth() < birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    return age;
  }
  
  console.log(calculate_age(new Date(1982, 11, 4))); // Output: 41 (as of 2024-07-15)
  console.log(calculate_age(new Date(1962, 1, 1))); // Output: 62 (as of 2024-07-15)