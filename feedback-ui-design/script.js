const panelCtn = document.getElementById('panel')
const ratings = document.querySelectorAll('.rating')
const sendBtn = document.getElementById('send')

let activeIndex = ratings.length - 1

ratings.forEach((rating, idx) => {
  rating.addEventListener('click', () => {
    resetActive()
    rating.classList.add('active')
    activeIndex = idx
  })
})

function resetActive() {
  ratings.forEach((rating) => rating.classList.remove('active'))
}

sendBtn.addEventListener('click', () => {
  const msg = ratings[activeIndex].querySelector('small').textContent
  panelCtn.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${msg}</strong>
    <p>We'll use your feedback to improve our customer support.</p>
  `
})
