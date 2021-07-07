function toggleModalDialog (key) {
  const modalBox = document.querySelector(`[data-type="${key}-modalbox"]`);
  modalBox.classList.toggle('modal-dialog--active');
}

(function () {
  const backgroundList = document.getElementsByClassName('modal-dialog__background');
  for (let i = 0; i < backgroundList.length; i++) {
    const [key] = backgroundList[i].dataset.type.split('-');
    backgroundList[i].addEventListener('click', () => toggleModalDialog(key));
  }
} ());
