const cups = document.querySelectorAll('.cup-small')
const remained = document.getElementById('remained')
const percentage = document.getElementById('percentage')
const liters = document.getElementById('liters')

cups.forEach((cup, idx) => {
  cup.addEventListener('click', () => {
    highlightCups(idx)
  })
})

function isFull(cup) {
  return cup && cup.classList.contains('full')
}

function highlightCups(i) {
  if (isFull(cups[i]) && !isFull(cups[i].nextElementSibling)) {
    i--
  }

  cups.forEach((cup, idx) => {
    if (idx <= i) {
      cup.classList.add('full')
    } else {
      cup.classList.remove('full')
    }
  })
  updateBigCup((i + 1) / cups.length)
}

function updateBigCup(p) {
  if (p === 0) {
    percentage.style.visibility = 'hidden'
    percentage.style.height = '0'
  } else {
    percentage.style.visibility = 'visible'
    percentage.style.height = percentage.textContent = `${p * 100}%`
  }

  if (p === 1) {
    remained.style.visibility = 'hidden'
    remained.style.height = '0'
  } else {
    remained.style.visibility = 'visible'
    liters.textContent = `${2 * (1 - p)}L`
  }
}
