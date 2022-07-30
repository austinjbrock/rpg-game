function getDiceRollArray(diceCount) {
	let newDiceRolls = new Array(diceCount).fill().map(function(){
	return Math.floor(Math.random() * 6) + 1  
	})
	return newDiceRolls;
}


function getDicePlaceHolderHtml(diceCount) {
	let placeHolderDice= new Array(diceCount).fill().map(function(){
	return `<div class="placeholder-dice"></div>`
	})
	return( placeHolderDice)
}







export {getDiceRollArray,getDicePlaceHolderHtml}