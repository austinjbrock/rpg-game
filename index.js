import characterData from "./data.js";
import {getDiceRollArray, getDicePlaceHolderHtml} from "./utils.js";
import { Character } from "./character.js";
	

function attack(){
	orc.getDiceHtml()
	wizard.getDiceHtml()
	
	wizard.takeDamage(orc.currentDiceScore)
	orc.takeDamage(wizard.currentDiceScore)
	render()
	if(wizard.dead || orc.dead){
		endGame()
	}
}

function endGame(){
	
	const endMessage = wizard.health === 0 && orc.health === 0 ? 'No victors - all Players are dead':
	wizard.health > 0 ? 'Wizard Wins' : 'The Orc is Victorious'


	const endEmoji = wizard.health > 0 ? '🔮': '☠️'
	
document.body.innerHTML = 
	`<div class="end-game">
	<h2>Game Over</h2>
	<h3>${endMessage}</h3>
	<p class="end-emoji">${endEmoji}</p>
	</div>
	`
}


// const message = playerGuess < correctAnswer ? 'Too low!' : playerGuess > correctAnswer ? 'Too high!' : 'Exactly right!'

// console.log(message)


 document.getElementById('attack-button').addEventListener('click',attack)




const render = function(){
	document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
 	document.getElementById('monster').innerHTML = orc.getCharacterHtml()

}
const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)

render()






