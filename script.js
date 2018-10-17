let likeStore = {};

function addLike(key) {
  likeStore[key] = (likeStore[key] || 0) + 1;
  const likeButton = document.querySelector(`[data-type="${key}-button"]`);
  const likeMeter = document.querySelector(`[data-type="${key}-meter"]`);
  likeMeter.innerText = `+${likeStore[key]}`;
  likeButton.classList.add('active');
}

// Modal boxes

const modalBoxBackground = document.querySelector('.modalbox__background');


function openModalBox(key) {
  const modalBox = document.querySelector(`[data-type="${key}-modalbox"]`);
  modalBox.style.display = "block";
  modalBoxBackground.style.display = "block";
}

function closeModalbox(key) {
  const modalBox = document.querySelector(`[data-type="${key}-modalbox"]`);
  const closeModalBtn = document.querySelector(`[data-type="${key}-close-modalbox"]`);
  modalBox.style.display = "none";
  modalBoxBackground.style.display = "none";
}

/*window.onclick = function(event) {
  if (event.target == modalBoxBackground) {
    modalBox.style.display = "none";
    modalBoxBackground.style.display = "none";
  }
};
*/
