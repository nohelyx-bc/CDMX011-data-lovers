export function filtradopordirector(data,director) {
    return data.films.filter((dir) => {
        if (dir.director === director) {
            return dir;
        }
    })
    
}