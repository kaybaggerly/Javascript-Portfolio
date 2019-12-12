Javascript-Portfolio

This is my portfolio of the projects I made in DGM 1600. I used HTML, CSS, and Javascript. I made a personal portfolio, a Star Wars character and planets page, a pokemon cards page, and an Overwatch character description page.

Requirements: 
UI that utilizes proper, basic HTML, CSS and Flexbox

Basic JavaScript code:
Proper use of variables with proper scope:
var character = new OWCharacter(stats['name'], stats['description']);


Good use of conditional logic and value comparison:
const allChar = people.filter(person =>person.gender == 'male' | 'female' & person.gender !== 'male' & person.gender !== 'female')
const maleCharacters =  people.filter(person => person.gender === 'male')
const femaleCharacters =  people.filter(person => person.gender === 'female')
const otherChar = people.filter(person => person.gender !== 'male' & person.gender !== 'female')

Proper use of String manipulation:
 let charID = charURL.substring (end -2, end)
    if(charID.indexOf('/') !== -1) {
       return charID.slice(1, 2)
    }   else {
        return charID
    } 


Good use of Arrays
let pokemonData = [];
    for (const pokemon in data.result) {
        pokemonData.push(getAPIData(pokemon.url));
    }

Use of custom JavaScript objects
 const NewPoke = new Pokemon(800,'NewPoke');


Use of ES6:

Proper use of let and const variables:
const allDivs =  Array.from(document.querySelectorAll('div'));

Use of Arrow functions:
let characterImageData = imageData.find(o => o.name === character.name);

Use of Strings using Template Literals:
pic.src = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${pokeNum}.png`;

Proper declarations of Objects:
const NewPoke = new Pokemon(800,'NewPoke');

Use of Import and Export statements:
import { people } from '/starwarsjs/people.js'
import { planets } from '/starwarsjs/planets.js'

Demonstrates use of Basic Data Structures including:
Using Arrays to store and manipulate collections of data:
allChar.forEach(character => {
    femaleCharacters.forEach(character => {
        let matchedDiv = allDivs.find((oneDiv)=> {
            return oneDiv.firstChild.textContent === character.name
        })

Use of Objects with key-value pairs
name.textContent = `${single_pokemon.name}`


Iteration through an Array using loops and Array methods
    const theData = getAPIData('https://pokeapi.co/api/v2/pokemon/?limit=151')
    .then(data => {
        for (const pokemon of data.results) {
            getAPIData(pokemon.url)
            .then(pokedata => {
                populateDOM(pokedata)
            })
    }
    })

Demonstrates us of Object Oriented Programming techniques:

Objects with properties and methods accessed using dot notation:
const newButton = document.querySelector('#newCard');
  newButton.addEventListener("click", function() {
      let pokeId = prompt("Please enter a Pokemon ID");
      console.log(typeof pokeId);
      if (pokeId > 0 && pokeId <= 807) {
        getAPIData(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
      .then(result => {
      populateDOM(result);
      });
    } else {
        alert('There are no Pokemon with that number. Try another one.');
    }
  }) 

Objects using Constructors properly:
class Pokemon {
    constructor(id, name) {
      this.id = id
      this.name = name
      
    }
   }
