;(function theme() {
  const toggle = document.getElementById('toggle')

  toggle.addEventListener('click', updateTheme)

  let isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  updateTheme()
  function updateTheme() {
    if (isDark) {
      toggle.textContent = 'Light mode'
      setDarkMode()
    } else {
      toggle.textContent = 'Dark mode'
      setLightMode()
    }
  }
  function setLightMode() {
    document.documentElement.style.setProperty('--primary-color', '#fff')
    document.documentElement.style.setProperty('--secondary-color', '#111')
    isDark = true
  }
  function setDarkMode() {
    document.documentElement.style.setProperty('--primary-color', '#111')
    document.documentElement.style.setProperty('--secondary-color', '#fff')
    isDark = false
  }
})()

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]
const timeEl = document.getElementById('time')
const dateEl = document.getElementById('date')
const hEl = document.getElementById('h')
const mEl = document.getElementById('m')
const sEl = document.getElementById('s')
// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

function padZero(n) {
  return String(n).padStart(2, '0')
}
function updateTime() {
  const date = new Date()
  const h = date.getHours()
  const m = date.getMinutes()
  const s = date.getSeconds()
  timeEl.textContent = `${padZero(h % 12)}:${padZero(m)} ${
    h > 12 ? 'PM' : 'AM'
  }`

  hEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    h % 12,
    0,
    11,
    0,
    360
  )}deg)`
  mEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    m,
    0,
    59,
    0,
    360
  )}deg)`
  sEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    s,
    0,
    59,
    0,
    360
  )}deg)`
}
function updateDate() {
  const date = new Date()
  dateEl.innerHTML = `
    ${days[date.getDay()]}, ${months[date.getMonth()]}
    <span class="circle">${date.getDate()}</span>
  `
}
updateTime()
updateDate()
setInterval(() => {
  updateTime()
  updateDate()
}, 1000)
