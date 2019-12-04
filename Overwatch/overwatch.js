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
    const theData = getAPIData('https://overwatch-api.net/api/v1')
    .then(data => {
        for (const character of data.results) {
            getAPIData(character.url)
            .then(characterdata => {
                populateDOM(characterdata)
            })
    }
    })

    let mainArea = document.querySelector('main')