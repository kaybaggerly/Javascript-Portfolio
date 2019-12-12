import { people } from '/starwarsjs/people.js'
import { planets } from '/starwarsjs/planets.js'

let mainArea = document.querySelector('main')

const allChar = people.filter(person =>person.gender == 'male' | 'female' & person.gender !== 'male' & person.gender !== 'female')
const maleCharacters =  people.filter(person => person.gender === 'male')
const femaleCharacters =  people.filter(person => person.gender === 'female')
const otherChar = people.filter(person => person.gender !== 'male' & person.gender !== 'female')



people.forEach((person) => {
    let personDiv = document.createElement('div')
    let name = document.createElement('h1')
    let gender = document.createElement('p')
    let pic = document.createElement('img')

    let charNum = getCharNumber(person.url)

    name.textContent = person.name
    gender.textContent = person.gender
    pic.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
   
    
    personDiv.className += 'starwarsCharacter';
    personDiv.appendChild(name)
    personDiv.appendChild(gender)
    personDiv.appendChild(pic)

    mainArea.appendChild(personDiv)

    function getCharNumber(charURL) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring (end -2, end)
    if(charID.indexOf('/') !== -1) {
       return charID.slice(1, 2)
    }   else {
        return charID
    }  
}
})


planets.forEach((planet) => {

    let planetDiv = document.createElement('div')
    let pic = document.createElement('img')
    let name = document.createElement('h1')
    let terrain = document.createElement('p')
    let climate = document.createElement('p')
    let planetNum = getPlanetNum(planet.url)

    name.textContent = planet.name
    terrain.textContent = planet.terrain
    pic.src = `https://starwars-visualguide.com/assets/img/planets/${planetNum}.jpg`
    mainArea.appendChild(planetDiv)
    planetDiv.appendChild(name)
    planetDiv.appendChild(terrain)
    planetDiv.appendChild(pic)

    planetDiv.setAttribute('class', 'planetDiv')
    name.setAttribute('class', 'planetName')
    terrain.setAttribute('class', 'planetTerrain')
    pic.setAttribute('class', 'planetPic')
    

    function getPlanetNum(planetURL) {
        console.log(planetURL)
        let end = planetURL.lastIndexOf('/')
        let planetID = (planetURL.substring(end - 2, end))
        if (planetID.indexOf('/') !== -1) {
            return (planetID.slice(1, 2))
        } else {
            return planetID
        }
    }

     pic.addEventListener('error', (event) => {
        let badImage = event.target
        badImage.src = '../assets/images/earth.jpg'
      })
})




const allDivs =  Array.from(document.querySelectorAll('div'));

const mainHeader = document.querySelector('header')

//all character button
let allCharButton = document.createElement('button')
allCharButton.textContent = 'All Characters'
mainHeader.appendChild(allCharButton)

allCharButton.addEventListener('click', ()=>{
allChar.forEach(character => {
    femaleCharacters.forEach(character => {
        let matchedDiv = allDivs.find((oneDiv)=> {
            return oneDiv.firstChild.textContent === character.name
        })
        matchedDiv.setAttribute("style", "display: block;")
})
maleCharacters.forEach(character =>{
    let matchedDiv = allDivs.find((oneDiv)=>{
        return oneDiv.firstChild.textContent === character.name
    })
    
    matchedDiv.setAttribute("style", "display:block;")
})
planets.forEach(planet => {
    let matchedDiv = allDivs.find((oneDiv) => {
       return oneDiv.firstChild.textContent === planet.name
    })
    matchedDiv.setAttribute("style", "display: none;")
})
})


})

//male button
let maleButton = document.createElement ('button')
maleButton.textContent ='Male Characters'

maleButton.addEventListener('click', () => {
    maleCharacters.forEach(character => {
        let matchedDiv = allDivs.find((oneDiv) => {
            return oneDiv.firstChild.textContent === character.name
        })
        matchedDiv.setAttribute("style", "display: block;")
    })
    femaleCharacters.forEach(character => {
        let matchedDiv = allDivs.find((oneDiv) => {
           return oneDiv.firstChild.textContent === character.name
        })
        matchedDiv.setAttribute("style", "display: none;")
    })
})
//female button
let femaleButton = document.createElement ('button')
femaleButton.textContent = 'Female Characters'
mainHeader.appendChild(maleButton)
mainHeader.appendChild(femaleButton)


femaleButton.addEventListener('click', () => {
    femaleCharacters.forEach(character => {
        let matchedDiv = allDivs.find((oneDiv) => {
           return oneDiv.firstChild.textContent === character.name
        })
        matchedDiv.setAttribute("style", "display: block;")
    })

    maleCharacters.forEach(character => {
        let matchedDiv = allDivs.find((oneDiv) => {
            return oneDiv.firstChild.textContent === character.name
        })
        matchedDiv.setAttribute("style", "display: none;")
    })
})


//planets button
let planetsButton = document.createElement ('button')
planetsButton.textContent = 'Planets'
mainHeader.appendChild(planetsButton)

planetsButton.addEventListener('click', () => {
    planets.forEach(planet => {
        let matchedDiv = allDivs.find((oneDiv) => {
           return oneDiv.firstChild.textContent === planet.name
        })
        matchedDiv.setAttribute("style", "display: block;")
    })
    
    femaleCharacters.forEach(character => {
        let matchedDiv = allDivs.find((oneDiv) => {
           return oneDiv.firstChild.textContent === character.name
        })
        matchedDiv.setAttribute("style", "display: none;")
    })

    maleCharacters.forEach(character => {
        let matchedDiv = allDivs.find((oneDiv) => {
            return oneDiv.firstChild.textContent === character.name
        })
        matchedDiv.setAttribute("style", "display: none;")
})
otherChar.forEach(character => {
    let matchedDiv = allDivs.find((oneDiv) => {
        return oneDiv.firstChild.textContent === character.name
    })
    matchedDiv.setAttribute("style", "display: none;")
            })
    })
