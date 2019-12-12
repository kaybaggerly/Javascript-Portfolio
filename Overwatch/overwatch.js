(async function() {
    let data = await getAPIData('https://overwatch-api.net/api/v1/hero/');
    //request for second api for image data
    let imageData = await getAPIData('https://overwatch-api.tekrop.fr/heroes');
    for (const stats of data.data) {
        // creating a new character
        var character = new OWCharacter(stats['name'], stats['description']);
        // finds the corresponding portrait url
        let characterImageData = imageData.find(o => o.name === character.name);
        let portraitURL = characterImageData.portrait;
         populateDOM(character, portraitURL)
    }
})();

    class OWCharacter {
     constructor(nameVar, descriptionVar) {
    this.name = nameVar; 
    this.description = descriptionVar;
    this.picSource = `https://d1u1mce87gyfbn.cloudfront.net/hero/${nameVar}/hero-select-portrait.png`
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
    
    
    let mainArea = document.querySelector('main')
    let nav = document.querySelector('nav')
    function populateDOM(single_hero, portraitURL) {
        let heroScene = document.createElement('div')
        let heroCard = document.createElement('div')
        let heroFront = document.createElement('div')
        let heroBack = document.createElement('div')
        let pic = document.createElement('img')
        let picContainer = document.createElement('div')
        let name = document.createElement ('h1')
        name.textContent = single_hero.name
        let heroDiv = document.createElement('div')
    
        fillCardBack(heroBack, single_hero)
        heroScene.setAttribute('class', 'scene')
        heroCard.setAttribute('class', 'card')
        heroFront.setAttribute('class', 'card_face card_face--front')
        heroBack.setAttribute('class', 'card_face card_face--back')
        pic.setAttribute('class', 'picDivs')
        picContainer.setAttribute('class', 'containerDivs')
    
        name.textContent = `${single_hero.name}`

        //Lowercases and removes special characters in image links
       let lowerCaseName = single_hero.name.toLowerCase();
       let formattedName = lowerCaseName.replace(/[^a-z]/g, '')
       
       

       pic.src = portraitURL;
     
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
    
        heroCard.addEventListener( 'click', function() {
          heroCard.classList.toggle('is-flipped');
        });
    
    }
    
    
    function fillCardBack(heroBack, data) {
        let heroDescription = document.createElement('p')
        heroDescription.textContent = `${data.description}`
        heroBack.appendChild(heroDescription)
    }
    
