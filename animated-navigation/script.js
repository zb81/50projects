const navEl = document.getElementById('nav')
const toggleBtn = document.getElementById('toggle')

toggleBtn.addEventListener('click', () => {
  navEl.classList.toggle('active')
})
