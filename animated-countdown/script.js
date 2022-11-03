const replayBtn = document.getElementById('replay')
const counter = document.querySelector('.counter')
const final = document.querySelector('.final')
const nums = document.querySelectorAll('.nums span')

replayBtn.addEventListener('click', startAnimation)

function startAnimation() {
  counter.classList.remove('hide')
  final.classList.remove('show')
  nums.forEach((el, idx) => {
    el.classList.remove('out')
    if (idx > 0) {
      el.classList.remove('in')
    } else {
      el.classList.add('in')
    }
  })

  let i = 1
  function circle() {
    setTimeout(() => {
      nums[i - 1].classList.remove('in')
      nums[i - 1].classList.add('out')
      setTimeout(() => {
        if (i < nums.length) {
          nums[i].classList.add('in')
          i++
          circle()
        } else {
          counter.classList.add('hide')
          final.classList.add('show')
        }
      }, 500)
    }, 500)
  }
  circle()
}

startAnimation()
