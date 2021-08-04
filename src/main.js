//import { example } from './data.js';
// import data from './data/lol/lol.js';
// import { allFilms } from './data.js';
import ghibli from './data/ghibli/ghibli.js';
//console.log(allFilms);
//let allInfo = new allFilms;
let movies = document.getElementById("movies")
    //let rt = document.getElementById("rt");
    //let alphabet = document.getElementById("alphabet").value;
    let perso = document.getElementById("personajes");

ghibli.films.forEach((film) => {
      movies.innerHTML +=

         `<div class="card">
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

});


const hayaoMiyazaki = ghibli.films.filter((dir) => {
    if (dir.director === "Hayao Miyazaki") {
        return dir;
    }
});

const isaoTakahata = ghibli.films.filter((dir) => {
    if (dir.director === "Isao Takahata") {
        return dir;
    }
});

const hiromasaYonebayashi = ghibli.films.filter((dir) => {
    if (dir.director === "Hiromasa Yonebayashi") {
        return dir;
    }
});

const goroMiyazaki = ghibli.films.filter((dir) => {
    if (dir.director === "Gorō Miyazaki") {
        return dir;
    }
});

const hiroyukiMorita = ghibli.films.filter((dir) => {
    if (dir.director === "Hiroyuki Morita") {
        return dir;
    }
});

const yoshifumiKondo = ghibli.films.filter((dir) => {
    if (dir.director === "Yoshifumi Kondō") {
        return dir;
    }
});
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


//Filtrado por directores
console.log(hayaoMiyazaki);
console.log(isaoTakahata);
console.log(hiromasaYonebayashi);
console.log(goroMiyazaki);
console.log(hiroyukiMorita);
console.log(yoshifumiKondo);
console.log(popularity.sort((a) => (95 > a.rt_score) ? 1 : -1)); //Ordena por calificación
console.log(allFilms.sort((a,b)=> (a.title>b.title) ?  1 : -1)); //Ordena alfabéticamente
console.log(people);
console.log(vehicles);
console.log(locations);
const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");
btnMenu.addEventListener("click",function(){
    menu.classList.toggle("mostrar");
});

const subMenuBtn = document.querySelectorAll(".submenu-btn");
for (let i = 0; i < subMenuBtn.length; i++){
    subMenuBtn[i].addEventListener("click", function(){
        if(window.innerWidth < 1024){
            const subMenu = this.nextElementSibling;
            const heigh = subMenu.scrollHeight;
            if (subMenu.classList.contains("desplegar")) {
                subMenu.classList.remove("desplegar");
                subMenu.removeAttribute("style");

            }else{
                subMenu.classList.add("desplegar");
                subMenu.style.heigh = heigh + "px";
            }
        }
    });    
}
/*
document.getElementById("alphabet").addEventListener("click", (event) => {
    let filmsOrder = moviesSortBy(ghibli.films, alphabet.value);
    let filmsHTML = "";
}) */