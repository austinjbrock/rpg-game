function getDiceRollArray(diceCount) {
	let newDiceRolls = new Array(diceCount).fill().map(function(){
	return Math.floor(Math.random() * 6) + 1  
	})
	return newDiceRolls;
}


function getDicePlaceHolderHtml(diceCount) {
		return new Array(diceCount).fill(3).map(function(){
			return `<div class="placeholder-dice">${getDiceRollArray}</div>`
	}).join(' ')
}





export {getDiceRollArray,getDicePlaceHolderHtml}