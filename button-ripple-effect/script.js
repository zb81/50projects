const btn = document.getElementById('btn')

btn.addEventListener('click', (e) => {
  const x = e.clientX
  const y = e.clientY

  const buttonTop = e.target.offsetTop
  const buttonLeft = e.target.offsetLeft

  const xInside = x - buttonLeft
  const yInside = y - buttonTop

  // 不能使用 offsetX 和 offsetY，因为点击 circle 会导致事件冒泡，会影响这两个值
  // const { offsetX: xInside, offsetY: yInside } = e
  // console.log(xInside, yInside)
  const circle = document.createElement('span')
  circle.classList.add('circle')

  circle.style.top = yInside + 'px'
  circle.style.left = xInside + 'px'

  btn.appendChild(circle)

  setTimeout(() => circle.remove(), 500)
})
