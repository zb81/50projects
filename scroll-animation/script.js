const boxes = document.querySelectorAll('.box')
const triggerEl = document.querySelector('.trigger')

handler()

window.addEventListener('scroll', handler)
window.addEventListener('resize', handler)

function handler() {
  // const triggerBottom = (window.innerHeight / 5) * 4
  const triggerBottom = window.innerHeight - 210
  triggerEl.style.top = `${triggerBottom}px`

  boxes.forEach((box) => {
    /*
      获取 box 距离顶部的距离 boxTop
      如果 boxTop < triggerBottom (box 位于 trigger 上方)，显示
      否则隐藏
    */
    const boxTop = box.getBoundingClientRect().top
    if (boxTop < triggerBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}
