import characterData from "./data.js";
import {getDiceRollArray, getDicePlaceHolderHtml} from "./utils.js";
import { Character } from "./character.js";
	

function attack(){
	render()
	orc.getDiceHtml()
	wizard.getDiceHtml()
	
	wizard.takeDamage(orc.currentDiceScore)
	orc.takeDamage(wizard.currentDiceScore)

}

 document.getElementById('attack-button').addEventListener('click',attack)




const render = function(){
	document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
 	document.getElementById('monster').innerHTML = orc.getCharacterHtml()

}
const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)

render()






