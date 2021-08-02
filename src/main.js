//import { example } from './data.js';
// import data from './data/lol/lol.js';

import ghibli from './data/ghibli/ghibli.js';

let peliculas = document.getElementById("peliculas")
    //let personajes = document.getElementById("personajes");


/*const allFilms = */
ghibli.films.forEach((film) => {
            peliculas.innerHTML +=

                `<div class="card">
                <div class="column">

                <h2>${film.title}</h2> 
                <img src="${film.poster}">  
                <p>${film.description}</p>
                <!-- 
            <p>· Personajes: ${film.people.map(personaje => {return `${personaje.name}`
                }
                    )}</p> -->
            </div>
            <div> 
            <ul>
            <li type="circle">Director: ${film.director}</li>    
            <li type="circle">Productor: ${film.producer}</li> 
            <li type="circle">Año de estreno: ${film.release_date}</li>
            <li type="circle">Rotten Tomatoes: ${film.rt_score}</li>
            </ul>
            </div>
            </div>` 
}) 
//console.log(allFilms);



/* const pers = ghibli.films.map(film) =>{
    return `${film.people.map(personaje => {return `${personaje.name}`
}
personajes.innerHTML =pers;*/

console.log(ghibli.films);
//showMovie(films);
//console.log(showMovie);
//console.log(Array.isArray(films));

//console.log(example, data);