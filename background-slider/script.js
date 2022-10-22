const body = document.body
const slides = document.querySelectorAll('.slide')
const left = document.getElementById('left')
const right = document.getElementById('right')

let activeIndex = 0

setBgToBody()
setActive()

left.addEventListener('click', () => {
  activeIndex--
  if (activeIndex < 0) {
    activeIndex = slides.length - 1
  }
  setBgToBody()
  setActive()
})
right.addEventListener('click', () => {
  activeIndex++
  if (activeIndex >= slides.length) {
    activeIndex = 0
  }
  setBgToBody()
  setActive()
})

function setBgToBody() {
  body.style.backgroundImage = slides[activeIndex].style.backgroundImage
}
function setActive() {
  slides.forEach((slide) => slide.classList.remove('active'))
  slides[activeIndex].classList.add('active')
}
