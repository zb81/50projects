const pokeCtn = document.getElementById('poke-ctn')

const count = 150
const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5',
}

const types = Object.keys(colors)

async function fetchPokemons() {
  for (let i = 1; i <= count; i++) {
    await getPokemon(i)
  }
}

async function getPokemon(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const res = await fetch(url)
  const data = await res.json()
  createPokemonCard(data)
}

function createPokemonCard(pokemon) {
  const pokemonEl = document.createElement('div')
  pokemonEl.classList.add('pokemon')

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
  const id = pokemon.id.toString().padStart(3, '0')

  const pokeTypes = pokemon.types.map((type) => type.type.name)
  const type = types.find((type) => pokeTypes.indexOf(type) > -1)
  const color = colors[type]

  pokemonEl.style.backgroundColor = color

  pokemonEl.innerHTML = `
    <div class="img-ctn">
      <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png" alt="" />
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small>Type: <span>${type}</span> </small>
    </div>
  `
  pokeCtn.appendChild(pokemonEl)
}

fetchPokemons()
