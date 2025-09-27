  const toggleBtn = document.getElementById('share-toggle');
  const shareMenu = document.getElementById('share-menu');

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', String(!isExpanded));
    if (isExpanded) {
      shareMenu.hidden = true; // hides from all users and assistive tech
      // Remove from tab order
      shareMenu.querySelectorAll('a').forEach(link => link.tabIndex = -1);
    } else {
      shareMenu.hidden = false;
      // Restore tab order
      shareMenu.querySelectorAll('a').forEach(link => link.tabIndex = 0);
    }
  });
