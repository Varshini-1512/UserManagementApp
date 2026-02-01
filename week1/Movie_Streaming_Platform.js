const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

// filter() only "Sci-Fi" movies
let result=movies.filter(movieObj=>movieObj.genre==='Sci-Fi')
console.log(result)

// map() to return     
    // "Inception (8.8)"
let result1=movies.map(movieObj=>{
    if(movieObj.title==='navya' && movieObj.rating==='8.8'){
        return movieObj
    }
    // return movieObj
})
console.log(result1)

// reduce() to find average movie rating
let result2=movies.reduce((sum, movieObj)=>sum+movieObj.rating, 0) / movies.length;
console.log(result2);

// find() movie "Joker"
let result3=movies.find(movieObj=>movieObj.title==="Joker");
console.log(result3);

// findIndex() of "Avengers"
let result4=movies.findIndex(movieObj=>movieObj.title==="Avengers");
console.log(result4);