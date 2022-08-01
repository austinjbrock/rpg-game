import {getDicePlaceHolderHtml, getDiceRollArray} from "./utils.js";

function Character(data){
      Object.assign(this,data)

      this.diceArray = getDicePlaceHolderHtml(this.diceCount)

   
      this.getDiceHtml = function(diceCount){
      this.currentDiceScore = getDiceRollArray(this.diceCount)
      
      this.diceArray = this.currentDiceScore.map(function(num){
      return `<div class="dice">${num}</div>`
      }).join(' ')
   

      this.takeDamage = function(attackScoreArray){
        const totalAttackScore = attackScoreArray.reduce(function(total,num) {
         return total + num
        })
       this.health -= totalAttackScore
   }
 }
   



        
      this.getCharacterHtml = function(){
         const {elementId, name,avatar,health,diceCount,diceArray} = this;
         const diceHtml = this.getDiceHtml(diceCount)
         
         return `
         <div class="character-card">
         <h4 class="name"> ${name} </h4>
         <img class="avatar" src="${avatar}"/>
         <p class="health">health: <b> ${health} </b></p>
         <div class="dice-container">
         ${diceArray} </div>
         </div>   
         `
         }	
      }
   export {Character}