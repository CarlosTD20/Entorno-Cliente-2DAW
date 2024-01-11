import { Injectable } from '@angular/core';
import { ARTICULOS } from '../modelos/list-articulos';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor() { }

  articulos = ARTICULOS

  verArticulos(){
    return this.articulos
  }

  getArticulo(id:string){
    let pos = this.articulos.findIndex(a=> a.id == id)
    return this.articulos[pos]
  }
}
