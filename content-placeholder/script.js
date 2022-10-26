setTimeout(() => {
  updateHeader()
  updateContent()
  updateAuthor()
}, 3000)

function updateHeader() {
  const headerEl = document.getElementById('header')
  clearAnimation(headerEl)
  headerEl.innerHTML = `
    <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" />
  `
}

function updateContent() {
  const titleEl = document.getElementById('title')
  const excerptEl = document.getElementById('excerpt')
  clearAnimation(titleEl, excerptEl)
  titleEl.textContent = 'Lorem ipsum dolor sit amet'
  excerptEl.textContent =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'
}

function updateAuthor() {
  const profileImgEl = document.getElementById('profile_img')
  const nameEl = document.getElementById('name')
  const dateEl = document.getElementById('date')
  clearAnimation(profileImgEl, nameEl, dateEl)
  profileImgEl.innerHTML = `
    <img src="https://avatars.githubusercontent.com/u/102913951?s=400&u=7ee1a4a60dea6d3073d0f48a8abea1e857c3f84e&v=4" />
  `
  nameEl.textContent = 'Donkey'
  dateEl.textContent = 'Oct 25, 2022'
}

function clearAnimation() {
  Array.prototype.forEach.call(arguments, (el) => {
    el.classList.remove('animated-bg')
    el.classList.remove('animated-bg-text')
  })
}
