export function filtradoPorDirector(data,director) {
    return data.films.filter((dir) => {
        if (dir.director === director) {
            return dir;
        }
    })
    
}

export function filtradoPorPelicula(data){
    return data.films.sort((film1, film2)=>{
            return film2.rt_score - film1.rt_score;
    })
}


// const popularity = ghibli.films.filter((pop) => {
//     if (pop.rt_score >= 95) {

//         return pop;
//     }

// });