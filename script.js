const likeBox = document.querySelector('.like-n-meter');
const like = likeBox.querySelector('.like');
const likeMeter = likeBox.querySelector('.like-meter');
let likeScore = 0;


function likeScoreUp() {
  likeMeter.value = "likeMeter.value++";
}


like.addEventListener('click', likeScoreUp());
