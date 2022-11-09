const btn = document.getElementById('btn')
const boxes = document.getElementById('boxes')

genBoxes()
function genBoxes() {
  const fragment = document.createDocumentFragment()
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement('div')
      box.classList.add('box')
      box.style.backgroundPosition = `-${j * 125}px -${i * 125}px`
      fragment.appendChild(box)
    }
  }
  boxes.appendChild(fragment)
}

btn.addEventListener('click', () => {
  boxes.classList.toggle('big')
})
