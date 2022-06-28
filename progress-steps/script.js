const prevBtnEl = document.querySelector('.prev')
const nextBtnEl = document.querySelector('.next')
const progressBarEl = document.querySelector('.bar-progress')
const stepElList = Array.from(document.querySelectorAll('.step'))

const total = 4
const beginning = 1
let currentStep = 1

prevBtnEl.addEventListener('click', function () {
  if (prevBtnEl.classList.contains('disabled')) return
  setActive(--currentStep)
  if (currentStep === beginning) {
    prevBtnEl.classList.add('disabled')
  }
})

nextBtnEl.addEventListener('click', function () {
  if (nextBtnEl.classList.contains('disabled')) return
  setActive(++currentStep)
  if (currentStep === total) {
    nextBtnEl.classList.add('disabled')
  }
})

function setActive(current) {
  prevBtnEl.classList.remove('disabled')
  nextBtnEl.classList.remove('disabled')

  // 清除 current 之后的状态
  stepElList.slice(current).forEach((el) => {
    el.classList.remove('active')
  })

  stepElList[current - 1].classList.add('active')
  progressBarEl.style.right = `${(100 / (total - 1)) * (total - current)}%`
}
