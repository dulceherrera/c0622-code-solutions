var $lightbulb = document.querySelector('.bulb-on');
var $darklight = document.querySelector('.light-on');
var lightBulbOn = false;

function handleClick(event) {
  if (lightBulbOn === false) {
    $lightbulb.className = 'bulb-off';
    $darklight.className = 'light-off';
    lightBulbOn = !lightBulbOn;
  } else if (lightBulbOn === true) {
    $lightbulb.className = 'bulb-on';
    $darklight.className = 'light-on';
    lightBulbOn = !lightBulbOn;
  }
}

$lightbulb.addEventListener('click', handleClick);
