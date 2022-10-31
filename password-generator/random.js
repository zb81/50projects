function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.'
  return symbols[Math.floor(Math.random() * symbols.length)]
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

const randomFunc = {
  number: getRandomNumber,
  symbol: getRandomSymbol,
  upper: getRandomUpper,
  lower: getRandomLower,
}

export default randomFunc
