import { Injectable } from '@angular/core';
import { Articulo } from '../Modelos/articulo';
import { ARTICULOS } from '../Modelos/mock-articulos';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor(
    private router:Router
  ){}

  articulos:Articulo[]=ARTICULOS

  acceder(){
    let fecha:Date=new Date()
      let hora=fecha.getHours()
      if(hora>=10){
        return true
      }else{
        return false
      }
  }

  filtrarArticulos(precio:number, orden:string){
    let articulosFiltrados = this.articulos.filter(a => a.precio >= precio)
    articulosFiltrados.sort((a,b) => a.precio-b.precio)
    return (orden == 'asc')? articulosFiltrados : articulosFiltrados.reverse()
  }

  getArticulos(){
    return this.articulos
  }

  getArticulo(id:string){
    let pos=this.articulos.findIndex(a=>a.id==id)
    return this.articulos[pos]
  }

  addArticulo(articulo:Articulo){
    this.articulos.push(articulo)
  }

  putArticulo(articulo:Articulo){
    let pos=this.articulos.findIndex(a=>a.id==articulo.id)
    this.articulos[pos]=articulo
  }

  deleteArticulo(id:string){
    let pos=this.articulos.findIndex(a=>a.id==id)
    this.articulos.splice(pos, 1)
  }
}
