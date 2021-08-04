// import ghibli from './data/ghibli/ghibli.js';

// //Objeto que contendrá todas las funciones de vistas para las tarjetas
// export function allFilms() {

//     //función de ordenamiento
//     // const moviesSortBy = (films, movies) => {
//     //     if (movies == "alphabet") {
//     //         const sortByAlphabet = ghibli.films.sort((film1, film2) => {
//     //             return (film1.title < film2.title);
//     //         })
//     //     }
//     // }
//     const hayaoMiyazaki = ghibli.films.filter((dir) => {
//         if (dir.director === "Hayao Miyazaki") {
//             return dir;
//         }
//     });

//     const isaoTakahata = ghibli.films.filter((dir) => {
//         if (dir.director === "Isao Takahata") {
//             return dir;
//         }
//     });

//     const hiromasaYonebayashi = ghibli.films.filter((dir) => {
//         if (dir.director === "Hiromasa Yonebayashi") {
//             return dir;
//         }
//     });

//     const goroMiyazaki = ghibli.films.filter((dir) => {
//         if (dir.director === "Gorō Miyazaki") {
//             return dir;
//         }
//     });

//     const hiroyukiMorita = ghibli.films.filter((dir) => {
//         if (dir.director === "Hiroyuki Morita") {
//             return dir;
//         }
//     });

//     const yoshifumiKondo = ghibli.films.filter((dir) => {
//         if (dir.director === "Yoshifumi Kondō") {
//             return dir;
//         }
//     });
//     //Prueba para popularidad

//     const popularity = ghibli.films.filter((pop) => {
//         if (pop.rt_score >= 95) {

//             return pop;
//         }

//     });


//     console.log(hayaoMiyazaki);
//     console.log(isaoTakahata);
//     console.log(hiromasaYonebayashi);
//     console.log(goroMiyazaki);
//     console.log(hiroyukiMorita);
//     console.log(yoshifumiKondo);
//     console.log(popularity.sort((a) => (95 > a.rt_score) ? 1 : -1));
    

//     //console.log(example, data);


// }
