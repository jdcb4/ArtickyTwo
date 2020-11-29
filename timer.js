function fnTimer() {
  var countDownDate = new Date().getTime() + TurnTime * 1000; // Set the date we're counting down to
  var x = setInterval(function() {                            // Update the count down every 1 second
  var now = new Date().getTime();                             // Get today's date and time
  var distance = countDownDate - now;                         // Find the distance between now and the count down date
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);  // Time calculations for days, hours, minutes and seconds
  document.getElementById("TurnTimer").innerHTML = "Time remaining: " + seconds + "s ";     // Display the result in the element with id="TurnTimer"
  // If the count down is finished, write some text
  if (distance < 0) {
      clearInterval(x);
      document.getElementById("TurnTimer").innerHTML = "EXPIRED";
  }
  }, TimerUpdateInterval);                                    // Timer updated frequency, set from index.js
}
