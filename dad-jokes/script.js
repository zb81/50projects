const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', genJoke)

genJoke()

async function genJoke() {
  const res = await fetch('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    },
  })
  const data = await res.json()
  jokeEl.innerHTML = data.joke
}
