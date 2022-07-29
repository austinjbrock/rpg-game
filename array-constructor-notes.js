//Aim: create an array of length ten. The elements should be undefined.

//const endOfLevelBosses = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]

// This way is clearly obnoxious, 
//so we will use a constructor for a better result


// One option we have already seen ...

// const endLevelBosses = []

// for(let i =0; i <10; i++){
//    endLevelBosses.push(undefined)
// }
// console.log(endLevelBosses)// undefined 10 times



const endLevelBosses = new Array (10)
console.log(endLevelBosses) // Undefined 10 times 

const longArray = new Array(1000)
console.log(longArray)


//Fill Method


//const poisonMushroom = new Array(10).fill('🍄')

//Fills 10 mushrooms

// Array Constructor with fill and map chained together, then rendered to the dom.  

const poisonMushrooms = new Array(10).fill('🍄').map(function(mushroom){
   return `<div class="box"> ${mushroom}</div>`
}).join(' ')
console.log(poisonMushrooms)// 1000 🍄 


document.getElementById('mushrooms').innerHTML = poisonMushrooms


