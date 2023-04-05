fetch('https://worldtimeapi.org/api/ip')
  .then(response => response.json())
  .then(data => {
    // Extract the current time from the response data
    const currentTime = new Date(data.datetime);

    // Log the current time to the console
    console.log('Current time:', currentTime);
  })
  .catch(error => {
    console.error('Error getting current time:', error);
  });

  function updateClock() {
    const currentTime = new Date();
    let hour = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let ampm = 'AM';
    
    // Convert to 12-hour format
    if (hour > 12) {
      hour -= 12;
      ampm = 'PM';
    }
    
    // Add leading zeros for single digit values
    hour = hour.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');
    
    // Update the clock display
    document.getElementById('hour').textContent = hour;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('ampm').textContent = ampm;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);