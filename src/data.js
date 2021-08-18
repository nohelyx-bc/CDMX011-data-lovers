import {start} from './main.js'
export function directorFilter(data,director,option) {
    let filtered = data.films.filter(function(dir){
        if (dir.director === director) {
            return dir;
        }else if(option == "All")

        return start;
    })
    return filtered; 
}

export function producerFilter(data, producer) {
    let filtered = data.films.filter(function(prod){
        if (prod.producer === producer){
            return prod
        }
    })
    return filtered;
}

export function sortByMovies(data, option){
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
