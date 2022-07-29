const energyCostEuros = [140,153,164,153,128,146]

const exchangeRate = 1.13

const energyCostDollars = energyCostEuros.map(function(euroCost){

   return euroCost * exchangeRate

   //if we used console.log(euroCost) alone, 
   //we would get each element one by one, or each individual element of the array

})

console.log(energyCostDollars) // [158.2,172.89,185.32,172.89,144.64,164.98]

// each number in the array has been multiplied by the exchange rate and 
//we now have a copy of the original array with the same rate


//Map Challenge

const guestList = ['Tom','Mary', 'Clare', 'John','Liz']

