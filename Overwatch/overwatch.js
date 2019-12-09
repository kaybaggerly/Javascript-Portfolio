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
    const theData = getAPIData('https://overwatch-api.net/api/v1/hero/')
    .then(data => {
        for (const stat of data['data']) {
        //    /* console.log(stat['name']); */
            var c = new OWCharacter(stat['name'], stat['description']);
            characterList.push(c)

        }
        await Promise.all(characterList);
        
        for (const c of characterList) {
            console.log(c);
        }
})
       /* console.log(data);
        for (const character of data.text['data']) {
            getAPIData(character.url)
            .then(characterdata => {
                populateDOM(characterdata)
            }) */
  

    let mainArea = document.querySelector('main')
  
    var characterList = [];
    
    class OWCharacter {
        OWCharacter(nameVar, descriptionVar) {
            this.name = nameVar;
            this.description = descriptionVar;
            this.picSource = `https://d1u1mce87gyfbn.cloudfront.net/hero/${nameVar}/hero-select-portrait.png`;
        } 

        // var name; 
        // var description; 
        // var picSource;

    }

    /* function populateDOM(single_hero) {
        let heroScene = document.createElement('div')
        let heroCard = document.createElement('div')
        let heroFront = document.createElement('div')
        let heroBack = document.createElement('div')
        let pic = document.createElement('img')
        let picContainer = document.createElement('div')
        let name = document.createElement ('h1')
        let heroNum = getHeroNumber(single_pokemon.id)
        name.textContent = single_hero.name
    
        fillCardBack(heroBack, single_hero)
        //
        heroScene.setAttribute('class', 'scene')
        heroCard.setAttribute('class', 'card')
        heroFront.setAttribute('class', 'card_face card_face--front')
        heroBack.setAttribute('class', 'card_face card_face--back')
        pic.setAttribute('class', 'picDivs')
        picContainer.setAttribute('class', 'containerDivs') */
