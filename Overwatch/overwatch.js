(async function() {
    let data = await getAPIData('https://overwatch-api.net/api/v1/hero/');
    let characterData = [];
    for (const stats in data['data']) {
        var c = new OWCharacter(stats['name'], stats['description']);
        characterData.push(c);
    }
    await Promise.all(characterData);
    populateDOM(overwatchCard)
});

var characterData = [];

class OWCharacter {
    constructor(nameVar, descriptionVar) {
      this.name = nameVar; 
      this.description = descriptionVar;
      this.picSource = `https://d1u1mce87gyfbn.cloudfront.net/hero/${name}/hero-select-portrait.png`
    }
}



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
    // const theData = getAPIData('https://overwatch-api.net/api/v1/hero/')
    // .then(data => {
    //     for (const stat of data['data']) {
    //         var c = new OWCharacter(stat['name'], stat['description']);
    //         characterData.push(c);
    //     }
    // })
    
    
    let mainArea = document.querySelector('main')
    let nav = document.querySelector('nav')
    // populateDOM(characterData)
    function populateDOM(single_hero) {
        let heroScene = document.createElement('div')
        let heroCard = document.createElement('div')
        let heroFront = document.createElement('div')
        let heroBack = document.createElement('div')
        let pic = document.createElement('img')
        let picContainer = document.createElement('div')
        let name = document.createElement ('h1')
        name.textContent = single_hero.name
        let type = document.createElement('p')
        let heroDiv = document.createElement('div')
    
        fillCardBack(heroBack, single_hero)
        //
        heroScene.setAttribute('class', 'scene')
        heroCard.setAttribute('class', 'card')
        heroFront.setAttribute('class', 'card_face card_face--front')
        heroBack.setAttribute('class', 'card_face card_face--back')
        pic.setAttribute('class', 'picDivs')
        picContainer.setAttribute('class', 'containerDivs')
    
        name.textContent = `${single_hero.name}`
     
       // pic.src = `../assets/images/${heroNum}.png`
       pic.src = `src="https://d1u1mce87gyfbn.cloudfront.net/hero/${single_hero.name}/hero-select-portrait.png`;

     
        heroFront.appendChild(picContainer)
        heroFront.appendChild(name)
        picContainer.appendChild(pic)
    
        heroCard.appendChild(heroFront)
        heroCard.appendChild(heroBack)
        heroScene.appendChild(heroCard)
    
        mainArea.appendChild(heroScene)
        console.log(name)
    
        heroScene.setAttribute('class', 'scene')
        heroCard.setAttribute('class', 'card')
        heroFront.setAttribute('class', 'card__face card__face--front')
        heroBack.setAttribute('class', 'card__face card__face--back')
        name.setAttribute('class', 'charName')
        pic.setAttribute('class', 'charPic')
        //var heroCard = document.querySelector('.card');
    
    
        heroCard.addEventListener( 'click', function() {
          heroCard.classList.toggle('is-flipped');
        });
    
    }
    
    
    
    
    //function getPokeNumber(id) {
    //    if (id < 10) return `00${id}`
    //    if(id > 9 && id < 100) {
    //        return `0${id}`
    //    } else return id
    //}
    
    function fillCardBack(heroBack, data) {
        let heroDescription = document.createElement('p')
        //let heroOrder = document.createElement('p')
        //let heroWeight = document.createElement('p')
        //let heroHeight = document.createElement ('p')
        heroDescription.textContent = `${data.description}`
        //heroOrder.textContent = `Number: ${data.order}`
        //heroWeight.textContent = `Weight: ${data.weight}`
        //heroHeight.textContent = `Height: ${data.height}`
        heroBack.appendChild(heroDescription)
        //heroBack.appendChild(heroOrder)
        //heroBack.appendChild(heroWeight)
        //heroBack.appendChild(heroHeight) 
    }
    
    
    
      /*  let end = charURL.lastIndexOf('/')
        let charID = charURL.substring (end -2, end)
        if(charID.indexOf('/') !== -1) {
           return `00${charID.slice(1, 2)}`
        }   else {
            return `0${charID}`
        }  
    } */
