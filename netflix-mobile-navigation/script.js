const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close-btn')
const navs = document.querySelectorAll('.nav')

openBtn.addEventListener('click', showNavs)
closeBtn.addEventListener('click', hideNavs)

function showNavs() {
  navs.forEach((el) => el.classList.add('visible'))
}

function hideNavs() {
  navs.forEach((el) => el.classList.remove('visible'))
}
