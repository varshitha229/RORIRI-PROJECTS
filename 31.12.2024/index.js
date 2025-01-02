// function updateClock() {
//     const now = new Date();
  
//     let hours = now.getHours();
//     let minutes = now.getMinutes();
//     let seconds = now.getSeconds();
  
//     // Display initial time as 6:18:56
//     if (hours === 6 && minutes === 18 && seconds === 56) {
//       hours = 6;
//       minutes = 18;
//       seconds = 56;
//     } else {
//       // Override with the current time
//       hours = String(hours).padStart(2, '0');
//       minutes = String(minutes).padStart(2, '0');
//       seconds = String(seconds).padStart(2, '0');
//     }
  
//     document.getElementById('hours').textContent = String(hours).padStart(2, '0');
//     document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
//     document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
//   }
  
//   // Initial display
//   updateClock();
  
//   // Update the clock every second
//   setInterval(updateClock, 1000);
function updateClock() {
    const now = new Date();
  
    // Get the current time
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    // Update time in the DOM
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
  
    // Get the current date
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = now.getFullYear();
  
    // Format the date as DD-MM-YYYY
    const formattedDate = `${day}-${month}-${year}`;
  
    // Update date in the DOM
    document.getElementById('current-date').textContent = formattedDate;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initial call to ensure the clock and date are displayed immediately
  updateClock();
  
  