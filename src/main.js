//import { example } from './data.js';
// import data from './data/lol/lol.js';
import { allFilms } from './data.js';
import ghibli from './data/ghibli/ghibli.js';

let allInfo = new allFilms;
let movies = document.getElementById("movies")
let rt = document.getElementById("rt");
let alphabet = document.getElementById("alphabet").value;
//let personajes = document.getElementById("personajes");

ghibli.films.forEach((film) => {
            movies.innerHTML +=

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
});

/*
document.getElementById("alphabet").addEventListener("click", (event) => {
    let filmsOrder = moviesSortBy(ghibli.films, alphabet.value);
    let filmsHTML = "";
}) */