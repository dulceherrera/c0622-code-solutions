var $containerModal = document.querySelector('.container-modal');
var $openModal = document.querySelector('.open-modal');
var $no = document.querySelector('.no');
function showmodal() {
  $containerModal.className = 'show-modal container-modal';
}

$openModal.addEventListener('click', showmodal);
$no.addEventListener('click', showmodal);
/* need a function that shows a modal when click a button
and another for close the modal */
