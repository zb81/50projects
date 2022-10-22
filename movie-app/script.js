const apiUrl =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const imgUrlPrefix = 'https://image.tmdb.org/t/p/w1280'
const searchApiUrl =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query='

const mainEl = document.getElementById('main')
const formEl = document.getElementById('form')
const inputEl = document.getElementById('search')

formEl.addEventListener('submit', (e) => {
  e.preventDefault()
  load(inputEl.value)
  inputEl.value = ''
})

load()

async function load(keyword) {
  const res = await fetch(keyword ? `${searchApiUrl}${keyword}` : apiUrl)
  const { results } = await res.json()

  let str = ''
  results.forEach((item) => {
    str += createMovieItem(item)
  })
  mainEl.innerHTML = str
}

function createMovieItem({
  poster_path,
  original_title,
  vote_average,
  overview,
}) {
  return `
    <div class="movie">
      <img src="${imgUrlPrefix + poster_path}" />
      <div class="movie-info">
        <h3>${original_title}</h3>
        <span class="${
          vote_average >= 8 ? 'green' : 'orange'
        }">${vote_average}</span>
      </div>
      <div class="movie-overview">
        <h3>Overview</h3>
        <p>${overview}</p>
      </div>
    </div>
  `
}
