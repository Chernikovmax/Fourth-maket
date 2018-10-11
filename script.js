const likeBox = document.querySelector('.like-n-meter');
const likeButton = likeBox.querySelector('.like');
const likeMeter = likeBox.querySelector('.like-meter');
let likeScore = 1;

function likeScoreUp() {
  likeMeter.innerText = ("+" + likeScore++);
}

function addClassByClick() {
  likeButton.classList.add('active');
}

likeButton.addEventListener('click', likeScoreUp);
likeButton.addEventListener('click', addClassByClick);
