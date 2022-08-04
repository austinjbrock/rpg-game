import {getDicePlaceHolderHtml, getDiceRollArray} from "./utils.js";

function Character(data){
      Object.assign(this,data)

      this.diceArray = getDicePlaceHolderHtml(this.diceCount)

      this.maxHealth = this.health
   
      this.getDiceHtml = function(diceCount){
      this.currentDiceScore = getDiceRollArray(this.diceCount)
      
      this.diceArray = this.currentDiceScore.map( num => `<div class="dice">${num}</div>`).join(' ')
   

      this.takeDamage = function(attackScoreArray){
        const totalAttackScore = attackScoreArray.reduce((total,num)=> total + num)
        this.health -= totalAttackScore;
          
       if(this.health <= 0){
         this.health = 0;
         this.dead = true
      }
      console.log(getPercentage(this.health,this.maxHealth))

}


const getPercentage = (remainingHealth,maximumHealth) => (100 * remainingHealth) / maximumHealth




}// end character

      this.getCharacterHtml = function(){
         const {elementId, name,avatar,health,diceCount,diceArray} = this;
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