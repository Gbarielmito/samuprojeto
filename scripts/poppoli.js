function openMoreInfoPopup() {
    document.getElementById('moreInfoPopuppoli').style.display = 'flex';
    document.body.classList.add('no-scroll');
}

function closeMoreInfoPopuppoli() {
    document.getElementById('moreInfoPopuppoli').style.display = 'none';
    document.body.classList.remove('no-scroll');
}

document.querySelector('.service__poli').addEventListener('click', openMoreInfoPopup);
document.querySelector('#moreInfoPopuppoli button').addEventListener('click', closeMoreInfoPopuppoli);