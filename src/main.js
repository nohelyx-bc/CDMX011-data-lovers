//import { example } from './data.js';
// import data from './data/lol/lol.js';

import ghibli from './data/ghibli/ghibli.js';
console.log(ghibli);
let peliculas = document.getElementById("peliculas")
const allFilms = ghibli.films.map((film) => {
    
    return `<img  src="${film.poster}"> <h2>${film.title}</h2> `
}) 
console.log(allFilms);
peliculas.innerHTML = allFilms;
/*function showMovie (films) { 
    
    return `Probando ${films.id}, Probando ${films.description}`;
       
}*/
console.log(ghibli.films);
//showMovie(films);
//console.log(showMovie);
//console.log(Array.isArray(films));

//console.log(example, data);
