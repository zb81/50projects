const fill = document.getElementById('fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for (const e of empties) {
  e.addEventListener('dragover', dragOver)
  e.addEventListener('dragenter', dragEnter)
  e.addEventListener('dragleave', dragLeave)
  e.addEventListener('drop', dragDrop)
}

function dragStart() {
  this.classList.add('hold')
  setTimeout(() => (this.className = 'invisible'), 0)
}

function dragOver(e) {
  e.preventDefault()
}
function dragEnter(e) {
  e.preventDefault()
  this.className += ' hovered'
}
function dragLeave() {
  console.log('dragLeave')
  this.classList.remove('hovered')
}
function dragDrop() {
  this.className = 'empty'
  this.append(fill)
}

function dragEnd() {
  this.className = 'fill'
}
