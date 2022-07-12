var $lightbulb = document.querySelector('.bulb-on');
var $darklight = document.querySelector('.light-on');
var counter = 0;

function turnLightBulb() {
  counter++;
  if (counter % 2 === 0) {
    $lightbulb.className = 'bulb-on';
    $darklight.className = 'light-on';
  } else {
    $lightbulb.className = 'bulb-off';
    $darklight.className = 'light-off';
  }
}

document.addEventListener('click', turnLightBulb);
