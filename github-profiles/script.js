const form = document.getElementById('form')
const search = document.getElementById('search')
const mainEl = document.getElementById('main')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const user = search.value
  if (user) {
    getUser(user)
    search.value = ''
  }
})

async function getUser(username) {
  try {
    const { data } = await axios.get(`https://api.github.com/users/${username}`)
    createUserCard(data)
    getRepos(username)
  } catch (err) {
    if (err.response.status == 404) {
      createErrorCard('No profile with this username')
    }
  }
}
function createUserCard(user) {
  const { avatar_url, name, bio, followers, following, public_repos } = user
  mainEl.innerHTML = `
    <div class="card">
      <div>
        <img src="${avatar_url}" alt="${name}" class="avatar" />
      </div>
      <div class="user-info">
        <h2>${name}</h2>
        <p>${bio}</p>
        <ul>
          <li>${followers}<strong>Followers</strong></li>
          <li>${following}<strong>Following</strong></li>
          <li>${public_repos}<strong>Repos</strong></li>
        </ul>
        <div id="repos"></div>
      </div>
    </div>
  `
}

async function getRepos(username) {
  try {
    const { data } = await axios.get(
      `https://api.github.com/users/${username}/repos?sort=created`
    )
    addReposToCard(data)
  } catch (err) {
    createErrorCard('Problem fetching repos')
  }
}

function addReposToCard(repos) {
  const reposEl = document.getElementById('repos')
  repos.slice(0, 5).forEach((repo) => {
    const { html_url, name } = repo
    const repoEl = document.createElement('a')
    repoEl.classList.add('repo')
    repoEl.href = html_url
    repoEl.target = '_blank'
    repoEl.textContent = name
    reposEl.appendChild(repoEl)
  })
}

function createErrorCard(msg) {
  const cardHTML = `
    <div class="card">
      <h1>${msg}</h1>
    </div>
  `
  main.innerHTML = cardHTML
}
