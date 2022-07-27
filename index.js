const hero = {
    
    elementId: 'hero',
    name: 'Wizard',
    avatar: 'images/wizard.png',
    health: 60,
    diceCount : 3,
}

const monster = {

        elementId: 'monster',
        name: 'Orc',
        avatar: 'images/orc.png',
        health: 60,
        diceCount: 1,

}


const knightInArmor = {

	elementId: 'knight',
	name: 'Lancelot',
	avatar: 'images/knight.png',
	health: 80,
	diceCount: 2,
}


	 function Character(data){

		Object.assign(this,data)
		// function to render image and dice
		this.getCharacterHtml = function(){
			const {elementId, name,avatar,health,diceCount} = this;
			const diceHtml = getDiceHtml(diceCount).join('')
			
			document.getElementById('hero').innerHTML += `
		 <div class="character-card">
			  <h4 class="name"> ${name}Wizard </h4>
			  <img class="avatar" src="${avatar}"/>
			  <p class="health">health: <b> ${health} </b></p>
			  <div class="dice-container">
			  ${diceHtml} </div>
			  </div>   
			  `
	
		}
	
	}
	

//ability to add new characters using the new character constructor function
const wizard = new Character(hero)
const orc = new Character(monster)
const knight = new Character(knightInArmor)




//Calls the html render function from character constructor
wizard.getCharacterHtml()
orc.getCharacterHtml()
knight.getCharacterHtml()



function getDiceRollArray(diceCount) {
let newDiceRolls = new Array(diceCount).fill().map(function(){
return Math.floor(Math.random() * 6) + 1  
})
return newDiceRolls;
}

function getDiceHtml(diceCount){
return getDiceRollArray(diceCount).map(function(num){
	return `<div class="dice">${num}</div>`
})
}
 