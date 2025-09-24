const button = document.querySelector('.share-button');
const shareMenu = document.querySelector('.share-menu');
const buttonIcon = document.querySelector('.share-button-image');

// Define image sources for easier maintenance
const defaultIcon = 'images/icon-share.svg';
const activeIcon = 'images/icon-active.svg';

button.addEventListener('click', () => {
  // Toggle a single, descriptive state class
  const isActive = shareMenu.classList.toggle('share-menu-active');

  shareMenu.classList.toggle('share-menu');

  // Use the component's state to determine the icon
  buttonIcon.src = isActive ? activeIcon : defaultIcon;
});
