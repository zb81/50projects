const ctn = document.getElementById('ctn')

const width = 30
const height = 30

genSquares()
function genSquares() {
  const fragment = document.createDocumentFragment()
  for (let i = 0; i < width * height; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', setColor)
    square.addEventListener('mouseout', removeColor)
    fragment.appendChild(square)
  }
  ctn.appendChild(fragment)
}

function setColor() {
  const color = randomColor()
  this.style.background = color
  this.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor() {
  this.style.background = '#1d1d1d'
  this.style.boxShadow = '0 0 2px #000'
}
