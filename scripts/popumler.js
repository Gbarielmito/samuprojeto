function openMoreInfoPopup() {
  document.getElementById('moreInfoPopupdois').style.display = 'flex';
  document.body.classList.add('no-scroll');
}

function closeMoreInfoPopupdois() {
  document.getElementById('moreInfoPopupdois').style.display = 'none';
  document.body.classList.remove('no-scroll');
}

document.querySelector('.service__btndois').addEventListener('click', openMoreInfoPopup);
document.querySelector('#moreInfoPopupdois button').addEventListener('click', closeMoreInfoPopupdois);