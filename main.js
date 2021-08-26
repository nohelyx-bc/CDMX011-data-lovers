
import data from './data/ghibli/ghibli.js';
import {directorFilter, producerFilter, sortByMovies} from './data.js'

const movies = document.getElementById("movies")
const people = document.getElementById("people")
const place = document.getElementById("place")
const vehicle =document.getElementById("vehicle");
const clickMovies= document.getElementById("clickMovies");
const clickDirectors= document.getElementById("clickDirectors");
const clickProducers= document.getElementById("clickProducers");
const clickFilms = document.getElementById("clickFilms");
const logoMain =document.getElementById("logoMain");

start(data);
showPeople(data)
showLocation(data)
showVehicle(data)

//------despliega el HTML en la pantalla inicial------
function start(data){
    let html=""
    data.films.map((film) => {
    html+=getFilms(film)      
    });
    movies.innerHTML =html;
}
    people.style.display="none";
    place.style.display="none";
    vehicle.style.display="none";


//-----generador de HTML------
function getFilms(film){
    return `<div class="card" id="card">
        <div class="column">
        <h2>"${film.title}"</h2> 
        <img src="${film.poster}">  
        <p>Director: ${film.director}</p>    
        <p>Productor: ${film.producer}</p> 
        <p>Año de estreno: ${film.release_date}</p>
        <p>Rotten Tomatoes:  ${film.rt_score}</p>
        </div>
        </div>` 
} 
//-----Función y evento para ocultar y mostrar las cards de Películas-----
function displayFilms(){
    people.style.display="none";
    place.style.display="none";
    vehicle.style.display="none";
    movies.style.display="flex";
} 

clickFilms.addEventListener("click", displayFilms);
logoMain.addEventListener("click", displayFilms);



//------funciones para mostrar personajes------
function showPeople(data){
    let html2=""
    data.films.map((film) => 
    film.people.map((person)=>{
        html2+=getPeople(person)   
    })
    );
    people.innerHTML =html2;
    
}

function getPeople(person){
    people.style.display="block";
    return `<div class="cardPeople">
    <div class="column">

    <h2>" ${person.name} "</h2> 
    <img src="${person.img}" class="poster">  
    <p class="description">Género: ${person.gender}</p>
    <p>Edad: ${person.age}</p>    
    <p>Colo de ojos: ${person.eye_color}</p> 
    <p>Color de cabello: ${person.hair_color}</p>
    <p>Especie: ${person.specie}</p>
    </div>
    </div>` 
}
//-----Función y evento para ocultar y mostrar las cards de Personajes-----
function displayPeople(){
    people.style.display="flex";
    movies.style.display="none";
    place.style.display="none";
    vehicle.style.display="none";
}
document.getElementById("clickPeople").addEventListener("click", displayPeople);


//------funciones para mostrar locaciones------
function showLocation(data){
    let html2=""
    data.films.map((film) => 
    film.locations.map((place)=>{
        html2+=getLocation(place)   
    })
    );
    place.innerHTML =html2;
}


function getLocation(place){
    return `<div class="cardPeople" id="card">
    <div class="column">

    <h2>" ${place.name} "</h2> 
    <img src="${place.img}" class="poster">  
    <p class="description">Clima: ${place.climate}</p>
    <p>Terreno: ${place.terrain}</p>    
    <p>Superficie: ${place.surface_water}</p> 
    <p>Habitantes: ${place.residents.map(res =>{
        if (place.residents != "TODO"){
        return res.name
    }else return "No se tiene información"
    })}</p>
    </div>
    </div>` 
}
//-----Función y evento para ocultar y mostrar las cards de Locaciones-----
function displayLocations(){
    people.style.display="none";
    movies.style.display="none";
    place.style.display="flex";
    vehicle.style.display="none";
}
document.getElementById("clickLocations").addEventListener("click", displayLocations);

//------funciones para mostrar vecihulos------
function showVehicle(data){
    let html2=""
    data.films.map((film) => 
    film.vehicles.map((vehicle)=>{
        html2+=getVehicle(vehicle)   
    })
    );
    vehicle.innerHTML =html2;
}

function getVehicle(vehicle){
    
    return `<div class="cardPeople" id="card">
    <div class="column">

    <h2>" ${vehicle.name} "</h2> 
    <img src="${vehicle.img}" class="poster">  
    <p class="description">Descripción: ${vehicle.description}</p>
    <p>Tipo: ${vehicle.vehicle_class}</p>    
    <p>Tamaño: ${vehicle.length}</p> 
    </div>
    </div>` 
}
//-----Función y evento para ocultar y mostrar las cards de Vehículos-----
function displayVehicle(){
    people.style.display="none";
    movies.style.display="none";
    place.style.display="none";
   vehicle.style.display="flex";
}

document.getElementById("clickVehicles").addEventListener("click", displayVehicle);

//------Funcion de reordenamiento de películas------
clickMovies.addEventListener("change",function(e) {
    const sortMovies = sortByMovies(data, e.target.value);

    const htmlSort = sortMovies.map((film) =>
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

//-------Filtrado por director -------
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