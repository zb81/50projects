const navEl = document.querySelector('nav')

window.addEventListener('scroll', () => {
  if (window.scrollY > navEl.offsetHeight + 150) {
    navEl.classList.add('active')
  } else {
    navEl.classList.remove('active')
  }
})
