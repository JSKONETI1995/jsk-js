let myFavorites = {
    favoritePlace: "The beach", 
    hobbies: ["Reading", "Writing", "Coding"],
    food :{
        fav:'biryani',
        fav1: 'Dosa',
        fav2:'chicken'
  },
};
  console.log(myFavorites);
  let food = myFavorites.food;
  console.log(food);
  let hobbies = myFavorites.hobbies;
  console.log(hobbies);

  let movies=['HANUMAN', 'MANJUMMEL BOYS', 'SALAAR'];

  console.log(movies[1]);
  console.log(movies[0]);
  console.log(movies[2]);
  movies.unshift('dj tillu');
  console.log(movies);
 movies.unshift('family star');
 console.log(movies);
 movies.shift()
 console.log(movies);