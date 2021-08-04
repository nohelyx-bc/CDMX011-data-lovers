//import { example } from './data.js';
// import data from './data/lol/lol.js';
import { allFilms } from './data.js';
import ghibli from './data/ghibli/ghibli.js';
console.log(allFilms);
//let allInfo = new allFilms;
let movies = document.getElementById("movies")
    //let rt = document.getElementById("rt");
    //let alphabet = document.getElementById("alphabet").value;
    //let personajes = document.getElementById("personajes");


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