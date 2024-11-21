function openMoreInfoPopup() {
    document.getElementById('moreInfoPopupseis').style.display = 'flex';
    document.body.classList.add('no-scroll');
}

function closeMoreInfoPopupseis() {
    document.getElementById('moreInfoPopupseis').style.display = 'none';
    document.body.classList.remove('no-scroll');
}

document.querySelector('.service__btnseis').addEventListener('click', openMoreInfoPopup);
document.querySelector('#moreInfoPopupseis button').addEventListener('click', closeMoreInfoPopupseis);