  const toggleButton = document.getElementById('share-toggle');
  const shareMenu = document.getElementById('share-menu');
  const buttonIcon = document.querySelector('.share-button-image');
  // Define image sources for easier maintenance
  const defaultIcon = 'images/icon-share.svg';
  const activeIcon = 'images/icon-active.svg';

  toggleButton.addEventListener('click', () => {
    const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
    toggleButton.setAttribute('aria-expanded', String(!isExpanded)); // Update ARIA state
    shareMenu.hidden = isExpanded; // Show/hide menu
    buttonIcon.src = isExpanded ? defaultIcon : activeIcon;
  });
