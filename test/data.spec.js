import data from '../src/data/ghibli/ghibli.js'
import {filtradoPorDirector} from '../src/data.js'


describe("Conjunto de test de filtrado",function(){
  it("Esto es una funcion",function(){
    expect(typeof filtradoPorDirector).toBe('function')
  })
  it("El filtro sirve sin un director que no existe",function(){
    expect(filtradoPorDirector(data, "" != data.films.map(dir =>{ 
      dir.director
    }))).toEqual([])
    console.log("No es un director de Studios Ghibli!")
  })
  it("El filtro sirve con un director que existe",function(){
    expect(filtradoPorDirector(data, "Hayao Miyazaki").length).toBe(9)
  })
  it("El filtro sirve con un director que existe",function(){
    expect(filtradoPorDirector(data, "Isao Takahata").length).toBe(5)
  })
})