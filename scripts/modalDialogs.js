function toggleModalDialog (key) {
  const modalBoxBackground = document.querySelector(`[data-type="${key}-modal-background"]`);
  const modalBox = document.querySelector(`[data-type="${key}-modalbox"]`);
  modalBoxBackground.classList.toggle("modalbox--active");
  modalBox.classList.toggle("modalbox--active");
}

(function () {
  const list =  document.getElementsByClassName(`modalbox__background`);
  //TODO: https://developer.mozilla.org/ru/docs/Web/Guide/HTML/Using_data_attributes
  for (let i = 0; i < list.length; i++) {
    // i added `.split('-')` coz you're using not the same name for date-type and i need only first part of name
    const [key] = list[i].dataset.type.split('-');
    // you did like currentBackground.addEventListener('click', closeModalbox(key)); but it's wrong.
    // You executed the function here but you need pass a function which will calls for event.
    list[i].addEventListener('click', () => toggleModalDialog(key));
  }
}());
