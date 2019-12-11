(async function() {
    let data = await getAPIData('https://overwatch-api.net/api/v1/hero/');
    // add a request for second api
    let imageData = await getAPIData('https://overwatch-api.tekrop.fr/heroes');

    for (const stats of data.data) {
        // creating a new character
        var character = new OWCharacter(stats['name'], stats['description']);

        // finds the corresponding portraint url
        // character.name
        // [{ name: 'Ana', portrait: 'url' }]
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
        let characterImageData = imageData.find(o => o.name === character.name);
        let portraitURL = characterImageData.portrait;
        // add the character to the dom
         populateDOM(character, portraitURL)
    }
})();

// Notes:
// called our immediately invoked function (IIF)
//  async IIF is nice because it lets us use async/await
// passed the right thing to populateDOM
// in(iterates all the innumerable properties) -> of(iterates over each element in an array)
//  only use for..in if you really want to iterate over
//   properties of an object
//  use for..of if you want to iterate over elements of an array

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
    function populateDOM(single_hero, portraitURL) {
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
       // string.prototype.replace(regex, replaceChar)
       //  let s = 'aBBc' 
       //  s.replace(/B/g, 'x')
       //    -> "axxc"
       // /[a-z]/g < matches only lower case
       // /[^a-z]/g < matches everything except lower case
       // write code that:
       //  get the lower case version of the name
       //  remove all non-lowercase characters
       // "d.va" -> "dva"
       // "Lúcio" -> "lúcio" -> "Lcio"

       // character name -> url
       // https://overwatch-api.tekrop.fr/heroes
       // make a request to that api ^
       // [ { key: 'ana', name: 'Ana', portrait: 'url' } ]
       // find matching character
       // use their image





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
    

    function filterHeroes(simpleList, ) {
        return simpleList.filter(senator => senator.party === partyAffiliation)
    }
