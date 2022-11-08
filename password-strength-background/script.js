const passwordInput = document.getElementById('password')
const background = document.getElementById('background')

passwordInput.addEventListener('input', (e) => {
  const v = e.target.value
  const l = v.length
  background.style.filter = `blur(${20 - l * 2}px)`
})
