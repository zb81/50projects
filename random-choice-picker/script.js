const textarea = document.getElementById('textarea')
const tagsEl = document.getElementById('tags')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
  const l = createTags(e.target.value)
  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = ''
      if (l) {
        randomSelect()
      }
    }, 10)
  }
})

function createTags(input) {
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim())

  tagsEl.innerHTML = ''
  tags.forEach((tag) => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerText = tag
    tagsEl.appendChild(tagEl)
  })
  return tags.length
}

function randomSelect() {
  const times = 30

  const id = setInterval(() => {
    const tag = pickRandomTag()
    highlightTag(tag)
    setTimeout(() => {
      unHighlightTag(tag)
    }, 100)
  }, 100)

  setTimeout(() => {
    clearInterval(id)
    setTimeout(() => {
      highlightTag(pickRandomTag())
    }, 100)
  }, times * 100)
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag')
  return tags[Math.floor(Math.random() * tags.length)]
}
function highlightTag(tag) {
  tag.classList.add('hl')
}
function unHighlightTag(tag) {
  tag.classList.remove('hl')
}
