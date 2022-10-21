const counters = document.querySelectorAll('.counter')

counters.forEach((counter) => {
  counter.textContent = '0'

  // const updateCounter = () => {
  //   const target = +counter.getAttribute('data-target')
  //   const c = +counter.textContent

  //   const increment = target / 200

  //   if (c < target) {
  //     counter.textContent = `${Math.ceil(c + increment)}`
  //     setTimeout(updateCounter, 1)
  //   } else {
  //     counter.textContent = target
  //   }
  // }

  const target = +counter.getAttribute('data-target')
  const step = target / 300

  const interval = setInterval(() => {
    const current = +counter.textContent
    if (current < target) {
      counter.textContent = `${Math.ceil(current + step)}`
    } else {
      clearInterval(interval)
      counter.textContent = target
    }
  }, 1)
})
