//arrow Functions

//if we use one parameter, we do not need the the () around it.

//however, if we use more 0 or more than one, we need the parenthesis


const alertSpend =  (amount) =>{
   return  ` you just spent 100 pouds`
}



const speedWarning = (speed,speedLimit) => {
   if(speed > speedLimit){
      return `You are going at ${speed} mph!`
   }

}

console.log(speedWarning(30,40))




const distanceTraveledMiles = [267, 345, 234, 190, 299]

const distanceTraveledKm = distanceTraveledMiles.map(distance =>{return Math.round(distance * 1.6 )})




console.log(distanceTraveledKm)
