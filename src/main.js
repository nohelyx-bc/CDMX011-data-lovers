
import data from './data/ghibli/ghibli.js';
import {directorFilter, producerFilter, sortByMovies} from './data.js'

let movies = document.getElementById("movies")
let people =document.querySelector(".people")
let place = document.getElementById("place")
let vehicle =document.getElementById("vehicle");
let clickMovies= document.getElementById("clickMovies");
let clickDirectors= document.getElementById("clickDirectors");
let clickProducers= document.getElementById("clickProducers");




start(data)
showPeople(data)
showLocation(data)
showVehicle(data)


//------Funcion de reordenamiento de películas------
clickMovies.addEventListener("change",function(e) {
    const sort = sortByMovies(data, e.target.value);

    const htmlSort = sort.map((film) =>
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
    
    movies.innerHTML = htmlSort;


})

//-------Filtrado por director-------
clickDirectors.addEventListener("change",function(e){

    const moviesFilter = directorFilter(data, e.target.value);

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

//-------Filtrado por productor-------
clickProducers.addEventListener("change",function(e){

    const moviesFilter = producerFilter(data, e.target.value);

    const htmlProducer = moviesFilter.map((film) =>
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
    
    movies.innerHTML = htmlProducer;


})


//------despliega el HTML en la pantalla inicial------
function start(data){
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

//------funciones para mostrar personajes------
function showPeople(data){
    let html2=""
    data.films.forEach((film) => 
    film.people.forEach((person)=>{
        html2+=getPeople(person)   
    })
    );
    people.innerHTML =html2;
}


function getPeople(person){
    return `<div class="cardPeople">
    <div class="column">

    <h2>" ${person.name}"</h2> 
    <img src="${person.img}" class="poster">  
    <p class="description">Género: ${person.gender}</p>
    <p>Edad: ${person.age}</p>    
    <p>Colo de ojos: ${person.eye_color}</p> 
    <p>Color de cabello: ${person.hair_color}</p>
    <p>Especie: ${person.specie}</p>
    </div>
    </div>` 
}

//------funciones para mostrar locaciones------
function showLocation(data){
    let html2=""
    data.films.forEach((film) => 
    film.locations.forEach((place)=>{
        html2+=getLocation(place)   
    })
    );
    place.innerHTML =html2;
}

function getLocation(place){
    return `<div class="cardPeople" id="card">
    <div class="column">

    <h2>" ${place.name}"</h2> 
    <img src="${place.img}" class="poster">  
    <p class="description">Clima: ${place.climate}</p>
    <p>Terreno: ${place.terrain}</p>    
    <p>Superficie: ${place.surface_water}</p> 
    <p>Habitantes: ${place.residents}</p>
    </div>
    </div>` 
}


//------funciones para mostrar vecihulos------
function showVehicle(data){
    let html2=""
    data.films.forEach((film) => 
    film.vehicles.forEach((vehicle)=>{
        html2+=getVehicle(vehicle)   
    })
    );
    vehicle.innerHTML =html2;
}

function getVehicle(vehicle){
    return `<div class="cardPeople" id="card">
    <div class="column">

    <h2>" ${vehicle.name}"</h2> 
    <img src="${vehicle.img}" class="poster">  
    <p class="description">Descripción: ${vehicle.description}</p>
    <p>Tipo: ${vehicle.vehicle_class}</p>    
    <p>Tamaño: ${vehicle.length}</p> 
    </div>
    </div>` 
}



