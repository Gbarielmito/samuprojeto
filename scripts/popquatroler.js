function openMoreInfoPopup() {
    document.getElementById('moreInfoPopupcinco').style.display = 'flex';
    document.body.classList.add('no-scroll');
}

function closeMoreInfoPopupcinco() {
    document.getElementById('moreInfoPopupcinco').style.display = 'none';
    document.body.classList.remove('no-scroll');
}

document.querySelector('.service__btncinco').addEventListener('click', openMoreInfoPopup);
document.querySelector('#moreInfoPopupcinco button').addEventListener('click', closeMoreInfoPopupcinco);