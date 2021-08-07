
import ghibli from './data/ghibli/ghibli.js';
import {filtradoPorDirector, filtradoPorPelicula} from './data.js'

let movies = document.getElementById("movies")
let clickMovies= document.getElementById("clickMovies");
let clickDirectors= document.getElementById("clickDirectors");
let clickPeople= document.getElementById("clickPeople");
let clickVehicles= document.getElementById("clickVehicles");
let clickLocations= document.getElementById("clickLocations");


iniciar(ghibli)


clickDirectors.addEventListener("change",function(e){
    
    console.log(filtradoPorDirector(ghibli,e.target.value))
    generadorcitoDeeHtmlcito();
    //borrar todo 
    //iniciar 
})


clickMovies.addEventListener("change",function(e){
    if (e.target.value === "RT"){
        let sortBy = filtradoPorPelicula(ghibli.films);
        films.innerHTML = sortBy;
    }
    console.log(filtradoPorPelicula(ghibli,e.target.value))
})

function iniciar(data){
    let html=""
    data.films.forEach((film) => {
    html+=generadorcitoDeeHtmlcito(film)      
  });
  movies.innerHTML =html;
}
// function directors(data){
//     let html2=""
//     data.films.forEach((filtradoPorDirector) => {
//     html2+=generadorcitoDeeHtmlcito(filtradoPorDirector)      
//   });
//   movies.innerHTML =html2
// }

function generadorcitoDeeHtmlcito(film){
   return `<div class="card">
        <div class="column">

        <h2>${film.title}</h2> 
        <img src="${film.poster}" class="poster">  
        <p class="description">${film.description}</p>
        <!-- 
        <p>· Personajes: ${film.people.map(personaje => {return `${personaje.name}`
        }
        )}</p> -->
        </div>
        <div class="datos"> 
        <p>Director: ${film.director}</p>    
        <p>Productor: ${film.producer}</p> 
        <p>Año de estreno: ${film.release_date}</p>
        <p>Rotten Tomatoes: ${film.rt_score}</p>
        </div>
        </div>` 
}




//Prueba para popularidad

const popularity = ghibli.films.filter((pop) => {
    if (pop.rt_score >= 95) {

        return pop;
    }

});

const allFilms = ghibli.films.map((film)=>{
    return film;
});
 
//MOSTRANDO TODOS LOS PERSONAJES
const people = ghibli.films.map((film)=>{
    return film.people;
})

//Checar la condicional porque sigue retornando arrays aunque estén vacíos.
const vehicles = ghibli.films.map((film)=>{
    if(film.vehicles !== Array(0))
    return film.vehicles
});
const locations = ghibli.films.map((film)=>{
    if(film.locations !== undefined)
    return film.locations;
});
