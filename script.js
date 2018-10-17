let likeStore = {};

function addLike(key) {
  likeStore[key] = (likeStore[key] || 0) + 1;
  const likeButton = document.querySelector(`[data-type="${key}-button"]`);
  const likeMeter = document.querySelector(`[data-type="${key}-meter"]`);
  likeMeter.innerText = `+${likeStore[key]}`;
  likeButton.classList.add('active');
}

// Modal boxes

function modalBackgroundOn(key) {
  const modalBoxBackground = document.querySelector(`[data-type="${key}-modal-background"]`);
  modalBoxBackground.classList.add('modalbox--active');
}

function modalBackgroundOff(key) {
  const modalBoxBackground =  document.querySelector(`[data-type="${key}-modal-background"]`);
  modalBoxBackground.classList.remove('modalbox--active');
}

function openModalBox(key) {
  const modalBox = document.querySelector(`[data-type="${key}-modalbox"]`);
  modalBox.classList.add('modalbox--active');
  modalBackgroundOn(key);
}

function closeModalbox(key) {
  const modalBox = document.querySelector(`[data-type="${key}-modalbox"]`);
  modalBox.classList.remove('modalbox--active');
  modalBackgroundOff(key);
}


// modal.addEventListener('click', function(event) {
//   var isClickInside = modalDialog.contains(event.target);
//
//   if (!isClickInside) {
//     //the click was outside the specifiedElement, do something
//     closeModal();
//   }
// });


  // window.onclick = function(event) {
  //   if (event.target == modalBoxBackground) {
  //     modalBox.style.display = "none";
  //     modalBoxBackground.style.display = "none";
  //   }
  // };


  // modal.addEventListener('click', function (e) {
  //   if (e.target === e.currentTarget) {
  //     modal.style.display = 'none';
  //   }
  // });
