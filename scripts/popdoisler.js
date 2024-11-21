function openMoreInfoPopup() {
    document.getElementById('moreInfoPopuptres').style.display = 'flex';
    document.body.classList.add('no-scroll');
}

function closeMoreInfoPopuptres() {
    document.getElementById('moreInfoPopuptres').style.display = 'none';
    document.body.classList.remove('no-scroll');
}

document.querySelector('.service__btntres').addEventListener('click', openMoreInfoPopup);
document.querySelector('#moreInfoPopuptres button').addEventListener('click', closeMoreInfoPopuptres);