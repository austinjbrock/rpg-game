const faveoriteFilm =  {
   title:'Top Gun',
   year: 1986,
   genre: 'action',
   star: 'Tom Cruise',
   director: 'Tony Scott'
}

const {title, year, genre, star,director } = faveoriteFilm;



const dreamHoliday = {
   destination: 'London, England',
   activity: 'museums',
   accomodation: 'hotel',
   companion: 'my Dog'
}

const {destination, activity,accomodation,companion} = dreamHoliday;

console.log(` I would love to go to ${destination}, and go to all the ${activity}. I would stay
in a ${accomodation}, and hang out with my ${companion}.`)


function getScores (){
   return [70,80,90]
}

let [x,y,z] = getScores();

console.log(getScores) 