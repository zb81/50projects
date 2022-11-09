const codes = document.querySelectorAll('.code')

codes[0].focus()

codes.forEach((el, idx) => {
  el.addEventListener('keydown', ({ key }) => {
    if (/^\d$/.test(key)) {
      if (el.nextElementSibling) {
        setTimeout(() => el.nextElementSibling.focus(), 10)
      } else {
        setTimeout(() => disableAll(), 10)
      }
    } else if (key === 'Backspace' && el.previousElementSibling) {
      el.previousElementSibling.value = ''
      el.previousElementSibling.focus()
    }
  })
})

function disableAll() {
  codes.forEach((el) => (el.disabled = true))
}
