//import {showPeople, showVehicle, showLocation} from './main.js'

export function filtradoPorDirector(data,director) {
    let filtrado = data.films.filter(function(dir){
        if (dir.director === director) {
            return dir;
        }
    })
    return filtrado; 
}

/* 
export function filterType(pokemones,typePokemon){
  let resultado=pokemones.filter(function(pokemones){
    return pokemones.type == typePokemon;
  })
  console.log(resultado);
     return resultado
}*/

export function filtradoPorPelicula(data, option){
    if (option == "ABC"){
        const sortByABC = data.films.sort((a, b) => {
            return a.title.localeCompare(b.title);
        })
        return sortByABC;
    }
        

    else if (option == "RT"){
        const sortByRT = data.films.sort((a, b)=>{
            return b.rt_score - a.rt_score;
        })
        return sortByRT;
    }
    
    else if (option == "year"){
        const sortByYear = data.films.sort((a, b) => {
            return b.release_date - a.release_date;
        })
        return sortByYear;
    }

}


/* export function filtradoPorPersonaje(option){
    if (option == "all") {
        return showPeople();
    }
} */


//Checar la condicional porque sigue retornando arrays aunque estén vacíos.
/*
const vehicles = ghibli.films.map((film)=>{
    if(film.vehicles !== Array(0))
    return film.vehicles
}); */