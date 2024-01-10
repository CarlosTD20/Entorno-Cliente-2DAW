/* Ejemplo 2
 - Tipado con varios tipos de datos
 - Data Binding: Event binding y Two Way Data Binding
*/

import { Component } from '@angular/core';
import { ARTICULOS } from '../Modelos/mock-articulos';
import { Articulo } from '../Modelos/articulo';

@Component({
  selector: 'app-ejemplo2',
  templateUrl: './ejemplo2.component.html',
  styleUrls: ['./ejemplo2.component.css']
})
export class Ejemplo2Component {

  articulos=ARTICULOS
  articulo=this.articulos[0]
  dato="DAW"


  seleccionarArticulo(){
    //prompt puede devolver un string o un null
    let elemento:string | null=prompt("Selecciona posicion del artículo...")

    //elemento==null?this.posicion=0:this.posicion=parseInt(elemento)

    if(elemento==null){
      alert("Error. Articulo no seleccionado")
    }
    else{
      if(isNaN(parseInt(elemento)))
        alert("Error. Selección no númerica.")
      else{
        if(parseInt(elemento)>=this.articulos.length || parseInt(elemento)<0)
          alert("Error. No existe el artículo")
        else
          this.articulo=this.articulos[parseInt(elemento)]
      }
    }
  }

  verArticulo(articulo:Articulo){
    console.log(articulo)
  }

  modificarDato(){
    let valor: string | null=prompt("Dime valor de dato: ")
    if(valor==null)
    this.dato=""
    else
      this.dato=valor
  }

}
