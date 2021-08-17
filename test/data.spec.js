import data from '../src/data/ghibli/ghibli.js'
import {directorFilter, producerFilter} from '../src/data.js'


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
    expect(directorFilter(data, "Hayao Miyazaki").length).toBe(9)
  })
  it("El filtro sirve con el director Isao Takahata",function(){
    expect(directorFilter(data, "Isao Takahata").length).toBe(5)
  })
  it("El filtro sirve con el director Hiromasa Yonebayashi", function(){
    expect(directorFilter(data, "Hiromasa Yonebayashi").length).toBe(2)
  })
  it("El filtro sirve con el director Gorō Miyazaki", function(){
    expect(directorFilter(data, "Gorō Miyazaki").length).toBe(2)
  })
  it("El filtro sirve con el director Hiroyuki Morita", function(){
    expect(directorFilter(data, "Hiroyuki Morita").length).toBe(1)
  })
  it("El filtro sirve con el director Yoshifumi Kondō", function(){
    expect(directorFilter(data, "Yoshifumi Kondō").length).toBe(1)
  })

  it("El filtrado por productor es una funcion",function(){
    expect(typeof producerFilter).toBe('function')
  })
  it("El filtro sirve sin un director que no existe",function(){
    expect(directorFilter(data, "" != data.films.map(dir =>{ 
      dir.director
    }))).toEqual([])
  })
  it("El filtro sirve con el director Hayao Miyazaki",function(){
    expect(directorFilter(data, "Hayao Miyazaki").length).toBe(9)
  })
  it("El filtro sirve con el director Isao Takahata",function(){
    expect(directorFilter(data, "Isao Takahata").length).toBe(5)
  })
  it("El filtro sirve con el director Hiromasa Yonebayashi", function(){
    expect(directorFilter(data, "Hiromasa Yonebayashi").length).toBe(2)
  })
  it("El filtro sirve con el director Gorō Miyazaki", function(){
    expect(directorFilter(data, "Gorō Miyazaki").length).toBe(2)
  })
  it("El filtro sirve con el director Hiroyuki Morita", function(){
    expect(directorFilter(data, "Hiroyuki Morita").length).toBe(1)
  })
  it("El filtro sirve con el director Yoshifumi Kondō", function(){
    expect(directorFilter(data, "Yoshifumi Kondō").length).toBe(1)
  })
})
