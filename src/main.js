//import { example } from './data.js';
// import data from './data/lol/lol.js';

import ghibli from './data/ghibli/ghibli.js';

let peliculas = document.getElementById("peliculas")
    //let personajes = document.getElementById("personajes");


/*const allFilms = */
ghibli.films.forEach((film) => {
            peliculas.innerHTML +=

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


const hayaoMiyazaki = ghibli.films.filter((dir) =>{
    if(dir.director === "Hayao Miyazaki"){
        return dir;
    }
});

const isaoTakahata = ghibli.films.filter((dir) =>{
    if(dir.director === "Isao Takahata"){
        return dir;
    }
});

const hiromasaYonebayashi = ghibli.films.filter((dir) =>{
    if(dir.director === "Hiromasa Yonebayashi"){
        return dir;
    }
});

const goroMiyazaki = ghibli.films.filter((dir) =>{
    if(dir.director === "Gorō Miyazaki"){
        return dir;
    }
});

const hiroyukiMorita = ghibli.films.filter((dir) =>{
    if(dir.director === "Hiroyuki Morita"){
        return dir;
    }
});

const yoshifumiKondo = ghibli.films.filter((dir) =>{
    if(dir.director === "Yoshifumi Kondō"){
        return dir;
    }
});

console.log(hayaoMiyazaki);
console.log(isaoTakahata);
console.log(hiromasaYonebayashi);
console.log(goroMiyazaki);
console.log(hiroyukiMorita);
console.log(yoshifumiKondo);

//Hiroyuki Morita

//console.log(example, data);