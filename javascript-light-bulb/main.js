var $lightbulb = document.querySelector('.bulb-on');
var $darklight = document.querySelector('.light-on');

function turnLightBulb(value) {
  if ($lightbulb.matches('div.bulb-off')) {
    $lightbulb.className = 'bulb-on';
    $darklight.className = 'light-on';
  } else {
    $lightbulb.className = 'bulb-off';
    $darklight.className = 'light-off';
  }
}

document.addEventListener('click', turnLightBulb);
