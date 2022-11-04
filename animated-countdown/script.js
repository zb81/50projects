const replayBtn = document.getElementById('replay')
const counter = document.querySelector('.counter')
const final = document.querySelector('.final')
const nums = document.querySelectorAll('.nums span')

startAnimation()

function reset() {
  counter.classList.remove('hide')
  final.classList.remove('show')
  nums.forEach((numEl) => {
    numEl.classList.value = ''
  })
  nums[0].classList.add('in')
}

function startAnimation() {
  nums.forEach((numEl, idx) => {
    numEl.addEventListener('animationend', (event) => {
      /*
        1. goIn 动画结束，添加 out 类，移除 in 类
        2. goOut 动画结束，为下一个元素添加 in 类
        3. 动画进行至最后一个元素，隐藏 counter ，显示 final
      */
      const { animationName } = event
      if (animationName === 'goIn') {
        numEl.classList.add('out')
        numEl.classList.remove('in')
      } else if (animationName === 'goOut' && idx < nums.length - 1) {
        numEl.nextElementSibling.classList.add('in')
      } else {
        counter.classList.add('hide')
        final.classList.add('show')
      }
    })
  })
}

replayBtn.addEventListener('click', () => {
  reset()
  startAnimation()
})
