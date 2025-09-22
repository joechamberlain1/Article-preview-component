const button = document.querySelector('button');
const shareMenu = document.getElementById('share-menu');
const img = document.querySelector('.share-button-image');

button.addEventListener('click', (e) => {
  console.log(e.currentTarget);
  shareMenu.classList.toggle('show-share')
  shareMenu.classList.toggle('hide-share')

  if (img.src.includes('icon-share')){
    img.setAttribute('src', 'images/icon-active.svg')
  } else {
    img.setAttribute('src', 'images/icon-share.svg')
  }
});
