let rotated = false

const container = document.querySelector('.container')
const openBtn = document.querySelector('#open')
const closeBtn = document.querySelector('#close')
const circleCtn = document.querySelector('.circle-container')
const lis = document.querySelectorAll('li')

openBtn.addEventListener('click', onOpen)
closeBtn.addEventListener('click', onClose)

/** open handler */
function onOpen(e) {
  rotated = true
  circleCtn.style.transform = 'rotateZ(-90deg)'
  container.style.transform = 'rotateZ(-15deg)'

  lis.forEach((el, i) => {
    el.style.transform = `translateX(${10 * i}px)`
    el.style.opacity = 100
  })
}

/** close handler */
function onClose() {
  rotated = false
  circleCtn.style.transform = 'rotateZ(0deg)'
  container.style.transform = 'rotateZ(0deg)'

  lis.forEach((el) => {
    el.style.transform = 'translateX(-200%)'
    el.style.opacity = 0
  })
}
