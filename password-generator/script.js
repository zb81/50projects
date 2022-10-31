import randomFunc from './random.js'

const resultEl = document.getElementById('result')
const clipboardBtn = document.getElementById('clipboard')
const generateBtn = document.getElementById('generate')

const lengthInput = document.getElementById('length')
const uppercaseInput = document.getElementById('uppercase')
const lowercaseInput = document.getElementById('lowercase')
const numbersInput = document.getElementById('numbers')
const symbolsInput = document.getElementById('symbols')

function generatePassword() {
  const length = +lengthInput.value
  const upper = uppercaseInput.checked
  const lower = lowercaseInput.checked
  const number = numbersInput.checked
  const symbol = symbolsInput.checked

  let password = ''
  const typesCount = upper + lower + number + symbol
  const typesArr = [{ upper }, { lower }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  )

  if (typesCount === 0) {
    return ''
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      password += randomFunc[Object.keys(type)[0]]()
    })
  }

  resultEl.textContent = password.slice(0, length)
}

generateBtn.addEventListener('click', generatePassword)

clipboardBtn.addEventListener('click', () => {
  const textarea = document.createElement('textarea')
  const password = resultEl.textContent

  if (!password) {
    return
  }

  textarea.value = password
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  textarea.remove()
  alert('Password copied to clipboard!')
})
