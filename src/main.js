//import { example } from './data.js';
// import data from './data/lol/lol.js';

import ghibli from './data/ghibli/ghibli.js';

let peliculas = document.getElementById("peliculas")
let personajes = document.getElementById("personajes");


const allFilms = ghibli.films.map((film) => {
    
    return `<div class="column">
                <h2 class="title">${film.title}</h2> 
                <img class="row" src="${film.poster}">  
                <p class="row">${film.description}</p>
                <p class="row">· Director: ${film.director}</p>     
                <p>· Productor: ${film.producer}</p> 
                <p>· Año de estreno: ${film.release_date}</p>
                <p>· Rotten Tomatoes: ${film.rt_score}</p>
                <p>· Personajes: ${film.people.map(personaje => {return `${personaje.name}`
                }
                    )}</p>
            </div>` 
}) 
console.log(allFilms);
peliculas.innerHTML = allFilms;


/* const pers = ghibli.films.map(film) =>{
    return `${film.people.map(personaje => {return `${personaje.name}`
}
personajes.innerHTML =pers;*/

console.log(ghibli.films);
//showMovie(films);
//console.log(showMovie);
//console.log(Array.isArray(films));

//console.log(example, data);
