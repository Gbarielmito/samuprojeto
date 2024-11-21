function openMoreInfoPopup() {
  document.getElementById('moreInfoPopup').style.display = 'flex';
  document.body.classList.add('no-scroll');
}

function closeMoreInfoPopup() {
  document.getElementById('moreInfoPopup').style.display = 'none';
  document.body.classList.remove('no-scroll');
}

document.querySelector('.service__btn').addEventListener('click', openMoreInfoPopup);
document.querySelector('#moreInfoPopup button').addEventListener('click', closeMoreInfoPopup);