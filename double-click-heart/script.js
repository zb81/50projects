const loveMe = document.querySelector('.love-me')
const timesEl = document.getElementById('times')

const duration = 1000

const loveMeLeft = loveMe.getBoundingClientRect().left
const loveMeTop = loveMe.getBoundingClientRect().top

let times = 0

dbClick(loveMe, (event) => {
  const { clientX, clientY } = event

  const heart = document.createElement('i')
  heart.classList.add('fas')
  heart.classList.add('fa-heart')
  heart.classList.add('heart-new')
  heart.style.left = `${clientX - loveMeLeft}px`
  heart.style.top = `${clientY - loveMeTop}px`
  loveMe.appendChild(heart)
  timesEl.textContent = ++times
  setTimeout(() => {
    heart.remove()
  }, duration)
})

// Simulate double click
function dbClick(el, fn, time = 300) {
  let count = 0
  let timer

  el.addEventListener('click', (event) => {
    count++
    if (count === 1) {
      timer = setTimeout(() => {
        count = 0
      }, time)
    }
    if (count === 2) {
      fn && fn(event)
      count = 0
      clearTimeout(timer)
    }
  })
}
