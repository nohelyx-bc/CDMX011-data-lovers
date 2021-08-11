
import ghibli from './data/ghibli/ghibli.js';
import {filtradoPorDirector, filtradoPorGenero, filtradoPorPelicula} from './data.js'

let movies = document.getElementById("movies")
let people =document.getElementById("people");
let clickMovies= document.getElementById("clickMovies");
let clickDirectors= document.getElementById("clickDirectors");
let clickPeople= document.getElementById("clickPeople");
let clickVehicles= document.getElementById("clickVehicles");
let clickLocations= document.getElementById("clickLocations");
const card = document.getElementById("card");


iniciar(ghibli)
showPeople(ghibli)

// Paso 1: borrar/ocultar el contenido en el div "movies"
// Paso 2: llamar contenido filtrado por director
// Paso 3: pasar funcion a través de elemento que muestre algo en el DOM

clickDirectors.addEventListener("change",function(e){
    
    console.log(filtradoPorDirector(ghibli, e.target.value))

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
    html+=getFilms(film)      
    });
    movies.innerHTML =html;
}

function getFilms(film){
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
    return `<div class="cardPeople" id="card">
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


/*
function getFilms(film){
    //se crea el contenedor para la tarjeta
    const divCard = document.createElement("div");
    divCard.classList.add("card");

    //Se crea el contenedor para los elementos dentro de la tarjeta
    const divColumn = document.createElement("div");
    divColumn.classList.add("column");
    divCard.appendChild(divColumn);

    //crear imagen
    const imgPoster = document.createElement("img");
    imgPoster.src = film.poster; 
    imgPoster.classList.add("poster");
    divColumn.appendChild(imgPoster);

    //crear director
    const pDirector = document.createElement("p");
    pDirector.innerHTML = film.director;
    divColumn.appendChild(pDirector);

     //crear productor
    const pProductor = document.createElement("p");
    pProductor.innerHTML = film.productor;
    divColumn.appendChild(pProductor); 

     //crear año de estreno
    const pYear = document.createElement("p");
    pYear.innerHTML = film.release_date;
    divColumn.appendChild(pYear);

    //crear calificación de RT
    const pRtomatoes = document.createElement("p");
    pRtomatoes.innerHTML = film.rt_score;
    divColumn.appendChild(pRtomatoes);

    console.log(divCard.childElementCount);
    console.log(divColumn.childElementCount);
    
    return divCard;
}
*/

