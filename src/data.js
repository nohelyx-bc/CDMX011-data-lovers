export function filtradoPorDirector(data,director) {
    return data.films.filter((dir) => {
        if (dir.director === director) {
            return dir;
        }
    })
    
}

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

export function filtradoPorGenero(data, option){
    if (option == "fem") {
        const sortByFem = data.films.people.filter((genero) => {
            if (genero.gender === "Female"){
                return genero;
            }
        })
        return sortByFem;
    }
}




// const popularity = ghibli.films.filter((pop) => {
//     if (pop.rt_score >= 95) {

//         return pop;
//     }

// });

//Checar la condicional porque sigue retornando arrays aunque estén vacíos.
/*
const vehicles = ghibli.films.map((film)=>{
    if(film.vehicles !== Array(0))
    return film.vehicles
}); */