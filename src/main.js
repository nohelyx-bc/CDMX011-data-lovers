
import ghibli from './data/ghibli/ghibli.js';
import {filtradoPorDirector, filtradoPorGenero, filtradoPorPelicula} from './data.js'

let movies = document.getElementById("movies")
let clickMovies= document.getElementById("clickMovies");
let clickDirectors= document.getElementById("clickDirectors");
let clickPeople= document.getElementById("clickPeople");
let clickVehicles= document.getElementById("clickVehicles");
let clickLocations= document.getElementById("clickLocations");
const card = document.getElementById("card");


iniciar(ghibli)


clickDirectors.addEventListener("change",function(e){
    
    console.log(filtradoPorDirector(ghibli, e.target.value))
    console.log(card.childElementCount);
    //borrar todo 
    //iniciar 
})

clickMovies.addEventListener("change", function(e){
    console.log(filtradoPorPelicula(ghibli, e.target.value))
})

clickPeople.addEventListener("change", function(e){
    console.log(filtradoPorGenero(ghibli, e.target.value))
})


function iniciar(data){
    let html=""
    data.films.forEach((film) => {
    html+=generadorcitoDeeHtmlcito(film)      
    });
    movies.innerHTML =html;
}


function generadorcitoDeeHtmlcito(film){
    return `<div class="card" id="card">
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
}

function getFilms(film){
    //se crea el contenedor para la tarjeta
    const divCard = document.createElement("div");
    divCard.classList.add("card");

    //Se crea el contenedor para los elementos dentro de la tarjeta
    const divColumn = document.createElement("div");
    divColumn.classList.add("column");

    //crear imagen
    const imgPoster = document.createElement("img");
    imgPoster.src = film.poster; 
    imgPoster.classList.add("poster");
    divColumn.appendChild(imgPoster);

}


