(function() {
  'use strict'

  document.getElementById("button").addEventListener("click", activateModal);
  document.getElementById("modal").addEventListener("click", deactivateModal);
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' || event.keyCode === 27) {
        deactivateModal();
    }
});

  function activateModal() {
    var image = this.value;
    var modal = document.getElementById('modal');
    var modalShadow = document.getElementById('modal-shadow');
    imageSelected(image);
    modal.setAttribute('class', 'active');
    modalShadow.setAttribute('class', 'active');
  }

  function deactivateModal() {
    console.log(this);
    var modal = document.getElementById('modal');
    var modalShadow = document.getElementById('modal-shadow');
    modal.setAttribute('class', '');
    modalShadow.setAttribute('class', '');
  }
})();
