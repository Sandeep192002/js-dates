function getTimeZoneName() {
    if (!Intl || !Intl.DateTimeFormat) {
      return "Timezone information not supported"; // Handle lack of support
    }
  
    const options = { timeZone: 'observed' };
    const dt = new Date();
    const formatter = new Intl.DateTimeFormat([], options);
    return formatter.resolvedOptions().timeZone;
  }
  
  const timezone = getTimeZoneName();
  console.log(timezone); // Output: "America/Los_Angeles" (example, depending on your location)