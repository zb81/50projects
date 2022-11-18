const startBtn = document.getElementById('start-btn')
const screenEls = document.querySelectorAll('.screen')
const insectEls = document.querySelectorAll('.choose-insect-btn')
const gameCtn = document.getElementById('game-ctn')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const messageEl = document.getElementById('message')

let seconds = 0
let score = 0
let selectedInsect = {}

startBtn.addEventListener('click', () => screenEls[0].classList.add('up'))

insectEls.forEach((insectEl) => {
  insectEl.addEventListener('click', () => {
    const img = insectEl.querySelector('img')
    const src = img.getAttribute('src')
    const alt = img.getAttribute('alt')
    selectedInsect = { src, alt }
    screenEls[1].classList.add('up')
    setTimeout(createInsect, 1000)
    startGame()
  })
})

function startGame() {
  setInterval(increaseTime, 1000)
}

function padZero(n) {
  return String(n).padStart(2, '0')
}
function increaseTime() {
  let m = Math.floor(seconds / 60)
  let s = seconds % 60
  timeEl.textContent = `Time: ${padZero(m)}:${padZero(s)}`
  seconds++
}

function createInsect() {
  const insect = document.createElement('div')
  insect.classList.add('insect')
  const { x, y } = getRandomLocation()
  insect.style.top = `${y}px`
  insect.style.left = `${x}px`
  insect.innerHTML = `
    <img
      src="${selectedInsect.src}"
      alt="${selectedInsect.alt}" 
      style="transform: rotate(${Math.random() * 360}deg)"
    />
  `
  insect.addEventListener('click', catchInsect)
  gameCtn.appendChild(insect)
}

function getRandomLocation() {
  const { innerWidth: w, innerHeight: h } = window
  return {
    x: Math.random() * (w - 200) + 100,
    y: Math.random() * (h - 200) + 100,
  }
}
function catchInsect() {
  increaseScore()
  this.classList.add('caught')
  setTimeout(() => this.remove(), 2000)
  addInsects()
}
function addInsects() {
  setTimeout(createInsect, 1000)
  setTimeout(createInsect, 1500)
}
function increaseScore() {
  score++
  if (score > 19) {
    messageEl.classList.add('visible')
  }
  scoreEl.textContent = `Score: ${score}`
}
