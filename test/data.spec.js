import data from '../src/data/ghibli/ghibli.js'
import {directorFilter, producerFilter, sortByMovies} from '../src/data.js'


describe("Conjunto de test de filtrado",function(){
  it("El filtrado por director es una funcion",function(){
    expect(typeof directorFilter).toBe('function')
  })
  it("El filtro sirve sin un director que no existe",function(){
    expect(directorFilter(data, "" != data.films.map(dir =>{ 
      dir.director
    }))).toEqual([])
  })
  it("El filtro sirve con el director Hayao Miyazaki",function(){
    expect(directorFilter(data, "Hayao Miyazaki")).toHaveLength(9)
  })
  it("El filtro sirve con el director Isao Takahata",function(){
    expect(directorFilter(data, "Isao Takahata")).toHaveLength(5)
  })
  it("El filtro sirve con el director Hiromasa Yonebayashi", function(){
    expect(directorFilter(data, "Hiromasa Yonebayashi")).toHaveLength(2)
  })
  it("El filtro sirve con el director Gorō Miyazaki", function(){
    expect(directorFilter(data, "Gorō Miyazaki")).toHaveLength(2)
  })
  it("El filtro sirve con el director Hiroyuki Morita", function(){
    expect(directorFilter(data, "Hiroyuki Morita")).toHaveLength(1)
  })
  it("El filtro sirve con el director Yoshifumi Kondō", function(){
    expect(directorFilter(data, "Yoshifumi Kondō")).toHaveLength(1)
  })

  it("El filtrado por productor es una funcion",function(){
    expect(typeof producerFilter).toBe('function')
  })
  it("El filtro sirve sin un productor que no existe",function(){
    expect(producerFilter(data, "" != data.films.map(dir =>{ 
      dir.director
    }))).toEqual([])
  })
  it("El filtro sirve con el productor Hayao Miyazaki",function(){
    expect(producerFilter(data, "Hayao Miyazaki")).toHaveLength(2)
  })
  it("El filtro sirve con el director Isao Takahata",function(){
    expect(producerFilter(data, "Isao Takahata")).toHaveLength(1)
  })
  it("El filtro sirve con el director Toru Hara", function(){
    expect(producerFilter(data, "Toru Hara")).toHaveLength(1)
  })
  it("El filtro sirve con el director Toshio Suzuki", function(){
    expect(producerFilter(data, "Toshio Suzuki")).toHaveLength(14)
  })
  it("El filtro sirve con el director Yoshiaki Nishimura", function(){
    expect(producerFilter(data, "Yoshiaki Nishimura")).toHaveLength(2)
  })
})

describe("Conjunto de test de ordenamiento",()=>{
  it("El ordenado es una función", ()=>{
    expect(typeof sortByMovies).toBe('function')
  })
  it("El ordenado de la a-z", () => {
    expect (sortByMovies(data, "ABC")).toHaveLength(20);
  })
  it("El ordenado debe ir por año", () => {
    expect (sortByMovies(data, "year")).toHaveLength(20);
  })
  it("El ordenado debe ser por calificación", () => {
    expect (sortByMovies(data, "RT")).toHaveLength(20);
  })
})
