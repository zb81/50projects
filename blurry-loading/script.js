const bg = document.querySelector('.bg')
const percentage = document.querySelector('.loading-text')

let start = 0
let intervalId
intervalId = setInterval(function () {
  start += 1
  percentage.innerText = `${start}%`
  bg.style.filter = `blur(${scale(start, 0, 100, 30, 0)}px)`
  percentage.style.opacity = scale(start, 0, 100, 1, 0)
  if (start > 99) {
    clearInterval(intervalId)
    percentage.style.opacity = '0'
  }
}, 20)

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
