function openMoreInfoPopup() {
    document.getElementById('moreInfoPopupdois').style.display = 'flex';
  }
  
  function closeMoreInfoPopup() {
    document.getElementById('moreInfoPopupdois').style.display = 'none';
  }
  
  document.querySelector('.service__btndois').addEventListener('click', openMoreInfoPopup);