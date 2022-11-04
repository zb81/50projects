const imgs = document.querySelectorAll('#imgs img')
const leftBtn = document.getElementById('prev')
const rightBtn = document.getElementById('next')
const ctn = document.getElementById('imgs')

let idx = 0

function move() {
  if (idx < 0) {
    idx = imgs.length - 1
  } else if (idx >= imgs.length) {
    idx = 0
  }
  ctn.style.transform = `translateX(${-idx * 500}px)`
}

let intervalId
function createInterval() {
  intervalId = setInterval(() => {
    idx++
    move()
  }, 2000)
}
function resetInterval() {
  clearInterval(intervalId)
  createInterval()
}

createInterval()

leftBtn.addEventListener('click', () => {
  resetInterval()
  idx--
  move()
})
rightBtn.addEventListener('click', () => {
  resetInterval()
  idx++
  move()
})
