let nav = document.querySelector('.navigation nav')
let hamburgerMenu = document.querySelector('.hamburger-menu')
hamburgerMenu.addEventListener('click', () => {
  nav.classList.toggle('active')
})
