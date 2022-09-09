const labelEls = document.querySelectorAll('label')

labelEls.forEach((labelEl) => {
  labelEl.innerHTML = labelEl.innerText
    .split('')
    .map(
      (letter, index) =>
        `<span style="transition-delay: ${index * 50}ms;">${letter}</span>`
    )
    .join('')
})
