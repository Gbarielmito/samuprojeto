function openMoreInfoPopup() {
  document.getElementById('moreInfoPopup').style.display = 'flex';
}

function closeMoreInfoPopup() {
  document.getElementById('moreInfoPopup').style.display = 'none';
}

document.querySelector('.service__btn').addEventListener('click', openMoreInfoPopup);