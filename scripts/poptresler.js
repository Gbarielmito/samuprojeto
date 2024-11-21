function openMoreInfoPopup() {
    document.getElementById('moreInfoPopupquatro').style.display = 'flex';
    document.body.classList.add('no-scroll');
}

function closeMoreInfoPopupquatro() {
    document.getElementById('moreInfoPopupquatro').style.display = 'none';
    document.body.classList.remove('no-scroll');
}

document.querySelector('.service__btnquatro').addEventListener('click', openMoreInfoPopup);
document.querySelector('#moreInfoPopupquatro button').addEventListener('click', closeMoreInfoPopupquatro);