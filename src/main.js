
import data from './data/ghibli/ghibli.js';
import {directorFilter, producerFilter, sortByMovies} from './data.js'

let movies = document.getElementById("movies")
let people =document.querySelector(".people")
let place = document.getElementById("place")
let vehicle =document.getElementById("vehicle");
let clickMovies= document.getElementById("clickMovies");
let clickDirectors= document.getElementById("clickDirectors");
let clickProducers= document.getElementById("clickProducers");
let clickFilms = document.getElementById("clickFilms");
let logoMain =document.getElementById("logoMain");

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

    document.getElementById("people").style.display="none";
    document.getElementById("place").style.display="none";
    document.getElementById("vehicle").style.display="none";

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
//-----Función y evento para ocultar y mostrar las cards-----
function displayFilms(){
    document.querySelector(".people").style.display="none";
    document.getElementById("movies").style.display="flex";
  
} clickFilms.addEventListener("click", displayFilms);
logoMain.addEventListener("click", displayFilms);
//------funciones para mostrar personajes------
function showPeople(data){
   
    let html2=""
    data.films.forEach((film) => 
    film.people.forEach((person)=>{
        html2+=getPeople(person, film)   
    })
    );
    people.innerHTML =html2;
    
}
function displayPeople(){
    document.getElementById("people").style.display="flex";
    document.getElementById("movies").style.display="none";
    document.getElementById("place").style.display="none";
    document.getElementById("vehicle").style.display="none";
}
document.getElementById("clickPeople").addEventListener("click", displayPeople);


function getPeople(person){
    document.getElementById("people").style.display="block";
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
function displayLocations(){
    document.getElementById("people").style.display="none";
    document.getElementById("movies").style.display="none";
    document.getElementById("place").style.display="flex";
    document.getElementById("vehicle").style.display="none";
}
document.getElementById("clickLocations").addEventListener("click", displayLocations);

function getLocation(place){
    return `<div class="cardPeople" id="card">
    <div class="column">

    <h2>" ${place.name}"</h2> 
    <img src="${place.img}" class="poster">  
    <p class="description">Clima: ${place.climate}</p>
    <p>Terreno: ${place.terrain}</p>    
    <p>Superficie: ${place.surface_water}</p> 
    <p>Habitantes: ${place.residents.map(res =>{
        if (place.residents != "TODO"){
        return res.name
    }else return "No hay información"
    })}</p>
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
function displayVehicle(){
    document.getElementById("people").style.display="none";
    document.getElementById("movies").style.display="none";
    document.getElementById("place").style.display="none";
    document.getElementById("vehicle").style.display="flex"
}
document.getElementById("clickVehicles").addEventListener("click", displayVehicle);

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



