let likeStore = {};

function addLike(key) {
  likeStore[key] = (likeStore[key] || 0) + 1;
  const likeButton = document.querySelector(`[data-type="${key}-button"]`);
  const likeMeter = document.querySelector(`[data-type="${key}-meter"]`);
  likeMeter.innerText = `+${likeStore[key]}`;
  likeButton.classList.add('active');
}
