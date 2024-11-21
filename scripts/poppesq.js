function openMoreInfoPopup() {
    document.getElementById('moreInfoPopuppesq').style.display = 'flex';
    document.body.classList.add('no-scroll');
}

function closeMoreInfoPopuppesq() {
    document.getElementById('moreInfoPopuppesq').style.display = 'none';
    document.body.classList.remove('no-scroll');
}

document.querySelector('.service__pesq').addEventListener('click', openMoreInfoPopup);
document.querySelector('#moreInfoPopuppesq button').addEventListener('click', closeMoreInfoPopuppesq);