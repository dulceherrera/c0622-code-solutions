var $letters = document.querySelectorAll('span');
var i = 0;

document.addEventListener('keydown', function (event) {
  if (event.key === $letters[i].textContent || event.keyCode === 32) {
    $letters[i].className = 'letter-correct';
    i++;
    $letters[i].className = 'blackline';
  } else {
    $letters[i].className = 'letter-incorrect';
  }
});
