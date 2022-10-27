const btn = document.getElementById('trigger-btn')
const toastsCtn = document.querySelector('.toasts')

const messageList = ['床前明月光', '疑是地上霜', '举头望明月', '低头思故乡']
const colorList = ['red', 'green', 'orange', 'blue']

btn.addEventListener('click', genToast)

const duration = 3000
function genToast() {
  const toast = document.createElement('div')
  toast.classList.add('toast')
  toast.classList.add('hide')
  const randomIndex = genRandom()
  toast.textContent = messageList[randomIndex]
  toast.style.color = colorList[randomIndex]
  toastsCtn.appendChild(toast)

  setTimeout(() => {
    toast.classList.remove('hide')
    toast.classList.add('show')
  }, 50)

  setTimeout(() => {
    toast.classList.remove('show')
    toast.classList.add('hide')
  }, duration + 100)

  setTimeout(() => {
    toast.remove()
  }, duration + 100 + 300)
}

/** [0, 3] */
function genRandom() {
  return Math.ceil(Math.random() * messageList.length) - 1
}
