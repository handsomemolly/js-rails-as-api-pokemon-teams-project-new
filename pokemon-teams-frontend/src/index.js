const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

const main = document.querySelector('main')

getTrainers()



//FETCH
function getTrainers() {
    fetch(TRAINERS_URL)
    .then(res => res.json())
    .then(trainers => trainers.forEach(trainer => renderTrainer(trainer)))
}

function postPokemons(pokemon) {
    fetch(POKEMONS_URL, {
        method: 'POST'
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name: 'derp'} )
    })
    .then(res => res.json())
    .then(console.log)
}




//DOM
function renderTrainer(trainer) {
    let card = document.createElement('div')
    let p = document.createElement('p')
    let addBtn = document.createElement('button')
    let ul = document.createElement('ul')

    trainer.pokemons.forEach(pokemon => {
        let li = document.createElement('li')
        let releaseBtn = document.createElement('button')
        
        li.textContent = `${pokemon.nickname} (${pokemon.species})`
        releaseBtn.textContent = 'Release'
        releaseBtn.className = 'release'
        releaseBtn.dataset.pokemonId = pokemon.id
        li.appendChild(releaseBtn)
        ul.appendChild(li)
    })

    card.className = 'card'
    card.dataset.id = trainer.id
    p.textContent = trainer.name
    addBtn.dataset.trainerId = trainer.id
    addBtn.textContent = 'Add Pokemon'

    card.append(p, addBtn, ul)
    main.appendChild(card)





}



// <div class="card" data-id="1"><p>Prince</p>
//   <button data-trainer-id="1">Add Pokemon</button>
//   <ul>
//     <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
//     <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
//     <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
//     <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
//     <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
//   </ul>
// </div>