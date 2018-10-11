const likeBox = document.querySelector('.like-n-meter');
const likeButton = likeBox.querySelector('.like');
const likeMeter = likeBox.querySelector('.like-meter');
const likeStyles = document.querySelector('.like--not-clicked');
let likeScore = 1;

function likeScoreUp() {
  likeMeter.innerText = ("+" + likeScore++);
}

function changeClassByClick() {
  likeStyles.classList.add('like--clicked');
  likeStyles.classList.remove('like--not-clicked');
}

likeButton.addEventListener('click', likeScoreUp);
likeButton.addEventListener('click', changeClassByClick);
