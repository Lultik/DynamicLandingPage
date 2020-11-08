// DOM Elements
const time = document.getElementById('time'),
   greeting = document.getElementById('greetings'),
   name = document.getElementById('name'),
   focus = document.getElementById('focus');

// Show Time
function showTime() {
   let today = new Date(),
      hour = today.getHours(),
      min = today.getMinutes(),
      sec = today.getSeconds();

// Set AM or PM
   const amPm = hour >= 12 ? 'PM' : 'AM';

// 12hr Format
   hour = hour % 12 || 12;

// Output Time
   time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}<span> </span>${amPm}`;

   setTimeout(showTime, 1000)
}

// Add Zero
function addZero(n) {
   return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Backgrounds And Greetings
function setBgGreet() {
   let today = new Date(),
      hour = today.getHours();

   if(hour < 12) {
      //Morning
      document.body.style.backgroundImage = "url('image/morning.jpg')";
      greeting.textContent = 'Good Morning';
   } else if(hour < 18) {
      //Afternoon
      document.body.style.backgroundImage = "url('image/afternoon.jpg')";
      greeting.textContent = 'Good Afternoon';
   } else {
      //Evening
      document.body.style.backgroundImage = "url('image/evening.jpg')";
      greeting.textContent = 'Good Evening';
      document.body.style.color = 'white';
   }
}

// Run
showTime();
setBgGreet();