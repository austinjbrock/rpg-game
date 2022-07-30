import characterData from "./data.js";
import {getDiceRollArray, getDicePlaceHolderHtml} from "./utils.js";
import { Character } from "./character.js";
	

function attack(){
	render()
	getDicePlaceHolderHtml()
}

 document.getElementById('attack-button').addEventListener('click',attack)




const render = function(){
	document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
 	document.getElementById('monster').innerHTML = orc.getCharacterHtml()
	document.getElementById('knight').innerHTML = knight.getCharacterHtml()
}
const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)
const knight = new Character(characterData.knightInArmor)

render()





