const contents = document.querySelectorAll('.content')
const navItems = document.querySelectorAll('nav ul li')

function hideAll() {
  contents.forEach((content) => content.classList.remove('show'))
  navItems.forEach((navItem) => navItem.classList.remove('active'))
}

navItems.forEach((navItem, idx) => {
  navItem.addEventListener('click', () => {
    hideAll()
    navItem.classList.add('active')
    contents[idx].classList.add('show')
  })
})
