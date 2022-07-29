// we use a capital letter just like other constructors
// when we use the "This" keyword in a constructor, we are referrring to the
// new object that we are creating
function Animal(data){
   this.name = data.name;
   this.species = data.species
   this.weightKg = data.weightKg
   this.age = data.age
   this.dateOfRelease = data.dateOfRelease
   this.summarizeAnimal = function(){
      console.log(`${this.name} is a ${this.age} years old ${this.species},
     which weighs ${this.weightKg}
      and was released into the wild on ${this.dateOfRelease} `)
   }
}





const animalForRelease1 = {

   name: 'Tilly',
   species: 'Tiger',
   weightKg: 56,
   age: 2,
   dateOfRelease: '03-02-2022'
}


const animalForRelease2 = {

   name: 'Nelly',
   species: 'Elephant',
   weightKg: 320,
   age: 16,
   dateOfRelease: '03-02-2022'
}



const tillyTheTiger = new Animal(animalForRelease1)
const nellyTheElephant = new Animal(animalForRelease2)



tillyTheTiger.summarizeAnimal // throws out the attibutes that we set -- name: Tilly, species: tiger
nellyTheElephant.summarizeAnimal()





const hotel1 = {
	name: 'Safari View',
	rooms: 30,
	stars: '⭐⭐⭐⭐⭐',
	costPerNightAdult: 240,
   costPerNightChild: 180,
}

const hotel2 = {
	name: 'Leopard Mansion',
	rooms: 96,
	stars: '⭐⭐⭐',
	costPerNightAdult: 120,
   costPerNightChild: 180,
}

function NationalParkHotels(data){
   this.name = data.name;
   this.rooms = data.rooms;
   this.stars = data.stars;
   this.costPerNightAdult = data.costPerNightAdult
   this.costPerNightChild = data.costPerNightChild
   
   this.summarizeHotel = function(){
      console.log(`A one night stay 
      at the ${this.name} for two adults and two children costs a 
      total of ${(this.costPerNightAdult * 2) + (this.costPerNightChild * 2)}`)
   }
}

const SafariView = new NationalParkHotels(hotel1)
const LeopardMansion = new NationalParkHotels(hotel2)



SafariView.summarizeHotel()
LeopardMansion.summarizeHotel()
