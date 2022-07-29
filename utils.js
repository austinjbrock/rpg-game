function getDiceRollArray(diceCount) {
	let newDiceRolls = new Array(diceCount).fill().map(function(){
	return Math.floor(Math.random() * 6) + 1  
	})
	return newDiceRolls;
	}

export {getDiceRollArray}
