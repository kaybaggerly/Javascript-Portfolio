async function getAPIData (url) {
try {
    const response = await fetch(url)
    const data = await response.json()
    return data
} catch (error) {
    console.log(error)
}
}

// now,use the returned async data
const theData = getAPIData('https://pokeapi.co/api/v2/pokemon/')
.then(data => {
    for (const pokemon of data.results) {
        getAPIData(pokemon.url)
        .then(pokedata => {
            populateDOM(pokedata)
        })
}
})


let mainArea = document.querySelector('main')
// populateDOM(pokedata)
function populateDOM(single_pokemon) {
    let pokeScene = document.createElement('div')
    let pokeCard = document.createElement('div')
    let pokeFront = document.createElement('div')
    let pokeBack = document.createElement('div')
    let pic = document.createElement('img')
    let name = document.createElement ('h1')
    let pokeNum = getPokeNumber(single_pokemon.id)
    name.textContent = single_pokemon.name
    //let type = document.createElement('p')
    //let pokeDiv = document.createElement('div')//

    pokeScene.setAttribute('class', 'scene')
    pokeCard.setAttribute('class', 'card')
    pokeFront.setAttribute('class', 'card_face card_face--front')
    pokeBack.setAttribute('class', 'card_face card_face--back')
    pic.setAttribute('class', 'picDivs')

    name.textContent = `${single_pokemon.name} height: $ 
    {single_pokemon.height}`
 
    pic.src = `../assets/images${pokeNum}.png`
    pokeFront.appendChild(pic)
    pokeFront.appendChild(name)

    pokeCard.appendChild(pokeFront)
    pokeCard.appendChild(pokeBack)
  
    pokeScene.appendChild(pokeCard)

    mainArea.appendChild(pokeScene)
    console.log(name)

    pokeScene.setAttribute('class', 'scene')
    pokeCard.setAttribute('class', 'card')
    pokeFront.setAttribute('class', 'card__face card__face--front')
    pokeBack.setAttribute('class', 'card__face card__face--back')
    name.setAttribute('class', 'charName')
    pic.setAttribute('class', 'charPic')
    //var pokeCard = document.querySelector('.card');


    pokeCard.addEventListener( 'click', function() {
      pokeCard.classList.toggle('is-flipped');
    });

}




function getPokeNumber(id) {
    if (id < 10) return `00${id}`
    if(id > 9 && id < 100) {
        return `0${id}`
    } else return id
}


  /*  let end = charURL.lastIndexOf('/')
    let charID = charURL.substring (end -2, end)
    if(charID.indexOf('/') !== -1) {
       return `00${charID.slice(1, 2)}`
    }   else {
        return `0${charID}`
    }  
} */