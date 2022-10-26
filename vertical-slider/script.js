const sliderCtn = document.querySelector('.slider-ctn')
const downBtn = document.getElementById('down')
const upBtn = document.getElementById('up')
const leftEl = document.getElementById('left')
const rightEl = document.getElementById('right')

const length = leftEl.querySelectorAll('div').length
const sliderHeight = sliderCtn.clientHeight

leftEl.style.top = `-${(length - 1) * sliderHeight}px`

let currentIndex = 0

upBtn.addEventListener('click', () => {
  currentIndex++
  if (currentIndex > length - 1) {
    currentIndex = 0
  }
  updateTranslate()
})
downBtn.addEventListener('click', () => {
  currentIndex--
  if (currentIndex < 0) {
    currentIndex = length - 1
  }
  updateTranslate()
})

function updateTranslate() {
  leftEl.style.transform = `translateY(${currentIndex * sliderHeight}px)`
  rightEl.style.transform = `translateY(${-currentIndex * sliderHeight}px)`
}
