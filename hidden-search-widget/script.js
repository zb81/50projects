const appEl = document.querySelector('.app')
const btnEl = document.querySelector('.btn')
const inputEl = document.querySelector('.input')

btnEl.addEventListener('click', onBtnClick)
function onBtnClick() {
  const isActive = inputEl.classList.contains('active')
  if (isActive) {
    inputEl.classList.remove('active')
  } else {
    inputEl.classList.add('active')
    inputEl.focus()
  }
}
