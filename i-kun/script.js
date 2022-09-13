const sounds = [
  '哎不行',
  '哎呦',
  '唱',
  '个人练习生',
  '鸡你太美',
  '叫',
  '厉不厉害',
  '你干嘛哎呦',
  '其实我平时',
  '全民制作人',
  'intro',
  'music',
  'rap',
]

sounds.forEach((sound) => {
  const btn = document.createElement('button')
  btn.classList.add('btn')
  btn.innerText = sound
  btn.addEventListener('click', () => {
    stopAll()
    document.getElementById(sound).play()
  })
  document.getElementById('buttons').appendChild(btn)
})

function stopAll() {
  sounds.forEach((sound) => {
    const audio = document.getElementById(sound)
    audio.pause()
    audio.currentTime = 0
  })
}
