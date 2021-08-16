
import data from './data/ghibli/ghibli.js';
import {filtradoPorDirector, filtradoPorPelicula} from './data.js'

let movies = document.getElementById("movies")
let people =document.getElementById("people");
let place = document.getElementById("place")
let vehicle =document.getElementById("vehicle");
let clickMovies= document.getElementById("clickMovies");
let clickDirectors= document.getElementById("clickDirectors");
let clickPeople= document.getElementById("clickPeople");




iniciar(data)
//showPeople(ghibli)
//showLocation(ghibli)
//showVehicle(ghibli)


//------Funcion de reordenamiento de películas------
clickMovies.addEventListener("change",function(e) {
    const sort = filtradoPorPelicula(data, e.target.value);

    const htmlSort = sort.map((film) =>
    `<div class="card" id="card">
        <div class="column">

        <h2>${film.title}</h2> 
        <img src="${film.poster}" class="poster">  
        <p class="description">${film.description}</p>
        <!-- 
        <p>· Personajes: ${film.people.map(personaje => {return `${personaje.name}`
        }
        )}</p> -->
        <p>Director: ${film.director}</p>    
        <p>Productor: ${film.producer}</p> 
        <p>Año de estreno: ${film.release_date}</p>
        <p>Rotten Tomatoes: ${film.rt_score}</p>
        </div>
        </div>`
    );
    
    movies.innerHTML = htmlSort;


})

//-------Filtrado por director-------
clickDirectors.addEventListener("change",function(e){

    const moviesFilter = filtradoPorDirector(data, e.target.value);

    const htmlDirector = moviesFilter.map((film) =>
    `<div class="card" id="card">
        <div class="column">
        <h2>${film.title}</h2> 
        <img src="${film.poster}">  
        <p>Director: ${film.director}</p>    
        <p>Productor: ${film.producer}</p> 
        <p>Año de estreno: ${film.release_date}</p>
        <p>Rotten Tomatoes: ${film.rt_score}</p>
        </div>
        </div>`
    );
    
    movies.innerHTML = htmlDirector;


})


//------despliega el HTML en la pantalla inicial------
function iniciar(data){
    let html=""
    data.films.forEach((film) => {
    html+=getFilms(film)      
    });
    movies.innerHTML =html;
}

//-----generador de HTML------
function getFilms(film){
    return `<div class="card" id="card">
        <div class="column">
        <h2>${film.title}</h2> 
        <img src="${film.poster}">  
        <p>Director: ${film.director}</p>    
        <p>Productor: ${film.producer}</p> 
        <p>Año de estreno: ${film.release_date}</p>
        <p>Rotten Tomatoes: ${film.rt_score}</p>
        </div>
        </div>` 
} 




