function clearActiveItem() {
  document.querySelectorAll('#navbar li a')
    .forEach(function(linkItem) {
      linkItem.classList.remove('section-active');
    });
}

function setActiveItem() {
  const currentHash = window.location.hash;
  if (currentHash) {
    const linkItem = document.querySelector('a[href="' + currentHash + '"]');
    linkItem.classList.add('section-active');
  }
}

window.onload = function() {
  setActiveItem();
}

window.onhashchange = function() {
  clearActiveItem();
  setActiveItem();
}
