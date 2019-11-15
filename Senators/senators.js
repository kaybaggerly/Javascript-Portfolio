async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error);
    }
    }

    
    let allSenators = []
    let simpleSenators = []
    let republicans = []
    let democrats = []
    
    const theData = getAPIData("senators.json").then(data => {
        allSenators = data.results[0].members
        simpleSenators = makeSimpleMap(allSenators)
        republicans = filterSenators(simpleSenators, "R")
        democrats = filterSenators (simpleSenators, "D")
        console.log(simpleSenators.sort)
        populateDOM(simpleSenators)
    })
    
    function makeSimpleMap(allOfThem) {
        let results = allOfThem.map(senator => {
            return {
            id: senator.id,
            name: `${senator.first_name} ${senator.last_name}`,
            party: senator.party,
            age: `${calculate_age(new Date(senator.date_of_birth))}`,
            gender: senator.gender,
            total_votes: senator.total_votes,
            }
        })
        return results
    }

    // filter examples

    function filterSenators(simpleList, partyAffiliation) {
        return simpleList.filter(senator => senator.party === partyAffiliation)
    }

    // reduce examples

    const testArray = [5,10,15,20,25,30,35,40,45,50]

    const testReduce = testArray.reduce((acc,num) => {
        return acc + num 
    }, 0)

    function totalVotes(senatorList) {
        const results = senatorList.reduce((acc, senator) => {
          return acc + senator.total_votes  
        }, 0)
        return results
    }

    function oldestSenator(senatorList) {
        const results = senatorList.reduce((oldest, senator) => {
            return (oldest.age || 0) > senator.age ? oldest : senator
        },  {})
    }

    function sortSenatorsByAge(senatorList) {
        return senatorList.sort((a,b) => {
            return a.age - b.age
        })
    }

    const container = document.querySelector(".container");


    function populateDOM(senator_array) {
        senator_array.forEach(senator => {
        let card = document.createElement('div')
        card.setAttribute('class', 'card')

        let cardImage = document.createElement('div')
        cardImage.setAttribute('class', 'card-image')

        let figure = document.createElement('figure')
        figure.setAttribute('class', 'image')
        
        let figureImage = document.createElement('img')
        figureImage.src = `https://www.congress.gov/img/member/${senator.id.toLowerCase()}_200.jpg`;
        figureImage.alt = 'Placeholder image'

        figure.appendChild(figureImage)
        cardImage.appendChild(figure)
        card.appendChild(cardImage)
        card.appendChild(cardContent (senator))
        container.appendChild(card)
    })
}

function cardContent(senator) {
    let cardContent = document.createElement('div')
    cardContent.setAttribute('class', 'card-content')
    let media = document.createElement('div')
    media.setAttribute('class', 'media')
    let mediaLeft = document.createElement('div')
    mediaLeft.setAttribute('class', 'media-left')
    let figure= document.createElement('figure')
    figure.setAttribute('class', 'image is 96x96')
    let img= document.createElement('img')
    if(senator.party === "R") {
        img.src = ``
    }

    if(senator.party === "D") {
        img.src = 
    }

    // img.src = `https:bulma.io/image/placeholders/96x96.png`
    // img.alt = 'Placeholder Image'
    
    
    let mediaContent = document.createElement ('div')
    mediaContent.setAttribute('class', 'media-content')
    let titleP = document.createElement('p')
    titleP.setAttribute('class', 'title is-4')
    titleP.textContent = `${senator.name}`
    let subtitleP = document.createElement('p')
    subtitleP.setAttribute('class', 'subtitle is-5')
    // subtitleP.textContent = `${senator.state_rank}`

    let contentDiv = document.createElement ('div')
    contentDiv.setAttribute('class', 'content')
    contentDiv.textContent = 'lorem ipsum'
    let contentBreak = document.createElement('br')
    let ageP = document.createElement('p')
    ageP.textContent = senator.age



    mediaContent=appendChild(titleP)
    mediaContent=appendChild(subtitleP)
    figure.appendChild(img)
    mediaLeft.appendChild(figure)
    media.appendChild(mediaLeft)
    media.appendChild(mediaContent)

    contentDiv.appendChild(contentBreak)
    contentDiv.appendChild (ageP)
    cardContent.append(media)
    cardContent.appendChild(contentDiv)
    return cardContent

}

function calculate_age(dob) {
    let diff_ps = Date.now() - dob.getTime();
    let age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

    /*let mainArea = document.querySelector('main')
    let mainButton = document.createElement('button')
    mainButton.textContent = 'Button'
    mainArea.appendChild(mainButton)
    mainButton.addEventListener( 'click', function() {
        mainButton.classList.toggle('is-flipped');
        console.log(allSenators)
      });*/


  
  
