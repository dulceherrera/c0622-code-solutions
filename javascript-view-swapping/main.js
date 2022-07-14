var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('div.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      if ($tab[i] === event.target) {
        $tab[i].className = 'tab active';
      } else {
        $tab[i].className = 'tab';
      }
    }
  }
  var $dataView = event.target.getAttribute('data-view');
  for (var x = 0; x < $view.length; x++) {
    if (event.target.matches('div.tab') && $dataView === $view[x].getAttribute('data-view')) {
      $view[x].className = 'view';
    } else {
      $view[x].className = 'view hidden';
    }
  }
}
);
