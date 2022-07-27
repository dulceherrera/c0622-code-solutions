var $countdownDisplay = document.querySelector('.countdown-display');
var counter = 4;
var IntervId = setInterval(changeText, 1000);

function changeText() {
  $countdownDisplay.textContent = counter--;
  if (counter === -1) {
    $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(IntervId);
  }
}
