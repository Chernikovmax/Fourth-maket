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

function useModalBox(key) {
  const modalBox = document.querySelector(`[data-type="${key}-modalbox"]`);
  modalBox.style.display = "block";
  modalBoxBackground.style.display = "block";

  document.querySelector(".modalbox-close").addEventListener('click', function() {
    modalBox.style.display = "none";
    modalBoxBackground.style.display = "none";
  });
}
