const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')

const sentence = 'We love programming!'
const length = sentence.length

let p = 1
let intervalId

function startInterval() {
  if (intervalId) {
    clearInterval(intervalId)
  }

  intervalId = setInterval(() => {
    if (p === length + 1) {
      p = 1
    }
    textEl.textContent = sentence.slice(0, p++)
  }, 350 / Math.sqrt(Number(speedEl.value)))
}

startInterval()
speedEl.addEventListener('change', startInterval)
