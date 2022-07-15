
const $overlay = document.querySelector('.overlay');
var $openModal = document.querySelector('.open-modal');
var $no = document.querySelector('.no');
var $modal = document.querySelector('.modal');

$openModal.addEventListener('click', function () {
  $overlay.className = 'overlay show';
  $modal.className = 'modal showmodal';
});

$no.addEventListener('click', function () {
  $overlay.className = 'overlay noshow';
  $modal.className = 'modal noshowmodal';
});
