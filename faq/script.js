// const faqEls = document.querySelectorAll('.faq')
// faqEls.forEach((el) => {
//   el.querySelector('.faq-toggle').addEventListener('click', () => {
//     if (el.classList.contains('active')) {
//       el.classList.remove('active')
//     } else {
//       el.classList.add('active')
//     }
//   })
// })

const btns = document.querySelectorAll('.faq-toggle')
btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.parentNode.classList.toggle('active')
  })
})
